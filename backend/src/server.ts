import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(
    cors({
        origin: FRONTEND_ORIGIN,
        methods: ['POST'],
        allowedHeaders: ['Content-Type'],
    })
);

// ─── In-Memory Rate Limiter ────────────────────────────────────────────────────
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

const ipHits = new Map<string, { count: number; resetAt: number }>();

function rateLimiter(req: Request, res: Response, next: NextFunction): void {
    const ip =
        (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() ||
        req.socket.remoteAddress ||
        'unknown';

    const now = Date.now();
    const entry = ipHits.get(ip);

    if (!entry || now > entry.resetAt) {
        ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return next();
    }

    if (entry.count >= RATE_LIMIT_MAX) {
        res.status(429).json({
            success: false,
            message: 'Too many submissions. Please try again in 15 minutes.',
        });
        return;
    }

    entry.count++;
    next();
}

// ─── Validation ────────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_PROJECT_TYPES = [
    'Short-Form Editing (TikTok/Reels/Shorts)',
    'Long-Form YouTube Editing',
    'Captions & Subtitles',
    'Motion Graphics & Titles',
    'Color Correction & Grading',
    'Audio Cleanup & Sound Design',
    'Content Repurposing',
    'Multiple Services / Package',
    'Custom / Other',
];

interface ContactBody {
    name: string;
    email: string;
    projectType: string;
    message: string;
    footageLink?: string;
}

function validate(body: Partial<ContactBody>): string | null {
    if (!body.name || body.name.trim().length < 2) return 'Name is required (min 2 chars).';
    if (!body.email || !EMAIL_REGEX.test(body.email)) return 'A valid email is required.';
    if (!body.projectType || !VALID_PROJECT_TYPES.includes(body.projectType))
        return 'A valid project type is required.';
    if (!body.message || body.message.trim().length < 10)
        return 'Message is required (min 10 chars).';
    if (body.name.trim().length > 100) return 'Name is too long.';
    if (body.message.trim().length > 5000) return 'Message is too long (max 5000 chars).';
    return null;
}

// ─── SMTP Transporter (optional) ──────────────────────────────────────────────
function createTransporter() {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;

    return nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
}

// ─── Fallback: Save to JSON ────────────────────────────────────────────────────
const SUBMISSIONS_FILE = path.resolve(__dirname, '../submissions.json');

function saveToFile(data: ContactBody & { submittedAt: string }): void {
    let existing: unknown[] = [];
    if (fs.existsSync(SUBMISSIONS_FILE)) {
        try {
            existing = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf-8'));
        } catch {
            existing = [];
        }
    }
    existing.push(data);
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(existing, null, 2));
}

// ─── Contact Route ─────────────────────────────────────────────────────────────
app.post('/api/contact', rateLimiter, async (req: Request, res: Response): Promise<void> => {
    const body = req.body as Partial<ContactBody>;

    const validationError = validate(body);
    if (validationError) {
        res.status(400).json({ success: false, message: validationError });
        return;
    }

    const submission = {
        name: body.name!.trim(),
        email: body.email!.trim(),
        projectType: body.projectType!,
        message: body.message!.trim(),
        footageLink: body.footageLink?.trim() || '',
        submittedAt: new Date().toISOString(),
    };

    const transporter = createTransporter();
    const TO_EMAIL = process.env.TO_EMAIL || 'mkrnic03@gmail.com';

    if (transporter) {
        // ── Send via SMTP ──
        try {
            await transporter.sendMail({
                from: `"MK Video Edit Contact" <${process.env.SMTP_USER}>`,
                to: TO_EMAIL,
                replyTo: submission.email,
                subject: `[MK Video Edit] New enquiry from ${submission.name} – ${submission.projectType}`,
                text: `
New contact form submission
============================
Name:         ${submission.name}
Email:        ${submission.email}
Project Type: ${submission.projectType}
Footage Link: ${submission.footageLink || 'Not provided'}
Submitted At: ${submission.submittedAt}

Message:
${submission.message}
        `.trim(),
                html: `
<div style="font-family:sans-serif;max-width:600px;margin:auto;background:#0f1629;color:#e2e8f0;border-radius:12px;overflow:hidden;">
  <div style="background:#f97316;padding:20px 24px;">
    <h1 style="margin:0;color:#fff;font-size:20px;">New Enquiry — MK Video Edit</h1>
  </div>
  <div style="padding:24px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#94a3b8;width:140px;">Name</td><td style="padding:8px 0;color:#fff;font-weight:600;">${submission.name}</td></tr>
      <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td style="padding:8px 0;"><a href="mailto:${submission.email}" style="color:#f97316;">${submission.email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#94a3b8;">Project Type</td><td style="padding:8px 0;color:#fff;">${submission.projectType}</td></tr>
      <tr><td style="padding:8px 0;color:#94a3b8;">Footage Link</td><td style="padding:8px 0;color:#fff;">${submission.footageLink || '—'}</td></tr>
      <tr><td style="padding:8px 0;color:#94a3b8;">Submitted</td><td style="padding:8px 0;color:#fff;">${submission.submittedAt}</td></tr>
    </table>
    <hr style="border-color:#1a2340;margin:16px 0;" />
    <h3 style="color:#f97316;margin:0 0 8px;">Message</h3>
    <p style="white-space:pre-wrap;color:#cbd5e1;">${submission.message}</p>
  </div>
</div>
        `,
            });

            res.json({ success: true, message: 'Message sent successfully!' });
        } catch (err) {
            console.error('SMTP error:', err);
            res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' });
        }
    } else {
        // ── Dev fallback: save to JSON file ──
        console.warn('⚠️  SMTP not configured. Saving submission to submissions.json');
        try {
            saveToFile(submission);
            res.json({
                success: true,
                message: 'Submission received (dev mode – saved to submissions.json).',
            });
        } catch (err) {
            console.error('File save error:', err);
            res.status(500).json({ success: false, message: 'Failed to save submission.' });
        }
    }
});

// ─── Health Check ──────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`✅ MK Video Edit backend running on http://localhost:${PORT}`);
    console.log(`   SMTP configured: ${!!createTransporter()}`);
});

export default app;
