# MK Video Edit — Website

Production-ready landing page for **MK Video Edit LLC**. Built with Vite + React + TypeScript + Tailwind CSS (frontend) and Node.js + Express (backend).

## Project Structure

```
mk-video-stranica/
├── frontend/        # Vite + React + TS + Tailwind
├── backend/         # Node.js + Express contact API
├── .env.example     # Environment variable template
└── README.md        # This file
```

---

## 🚀 Local Development

### 1. Copy environment variables

```bash
cp .env.example .env
```

Edit `.env` with your actual SMTP credentials (or leave blank for dev fallback mode).

### 2. Start the backend

```bash
cd backend
npm install
npm run dev
# Backend runs on http://localhost:3001
```

> **Dev mode:** If SMTP is not configured, form submissions are saved to `backend/submissions.json`.

### 3. Start the frontend

```bash
cd frontend
npm install   # (already done if you followed setup)
npm run dev
# Frontend runs on http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to `http://localhost:3001` automatically.

---

## 📧 SMTP / Email Setup

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server host (e.g., `smtp.gmail.com`) |
| `SMTP_PORT` | Port — `587` for TLS, `465` for SSL |
| `SMTP_USER` | Your email address |
| `SMTP_PASS` | App password (see below) |
| `TO_EMAIL` | Destination email (`mkrnic03@gmail.com`) |

### Gmail App Password setup
1. Go to your Google Account → **Security** → **2-Step Verification** → scroll to **App passwords**
2. Generate a new App Password for "Mail"
3. Use that 16-character code as `SMTP_PASS`

---

## 🌐 Production Deployment

### Option A: Vercel (Recommended — Front + Serverless)

> For Vercel, convert the backend to a Vercel Serverless Function by moving `backend/src/server.ts` logic into `frontend/api/contact.ts`.

1. Push repo to GitHub
2. Import the `frontend` folder in [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard (Settings → Environment Variables)
4. Deploy — Vercel auto-builds on push to `main`

### Option B: VPS (Full Stack)

1. SSH into your server
2. Clone repo: `git clone <repo-url>`
3. Copy and fill `.env`: `cp .env.example .env && nano .env`
4. Install pm2: `npm install -g pm2`
5. Build and start:
   ```bash
   # Backend
   cd backend && npm install && npm run build
   pm2 start dist/server.js --name mk-video-backend

   # Frontend
   cd ../frontend && npm install && npm run build
   # Serve dist/ with Nginx or Caddy
   ```
6. Point your domain's A record to the server IP

### Nginx config for the frontend (example)

```nginx
server {
    listen 80;
    server_name mkvideodit.com www.mkvideodit.com;

    root /var/www/mk-video-stranica/frontend/dist;
    index index.html;

    # Proxy API to Express
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Then get SSL with Certbot: `certbot --nginx -d mkvideodit.com`

---

## 🔧 Replacing TODOs

| File | TODO | What to do |
|------|------|------------|
| `Contact.tsx` | Calendly link | Replace `https://calendly.com/TODO_REPLACE_WITH_REAL_LINK` |
| `Portfolio.tsx` | Video URLs | Replace `videoUrl` and `thumbnailUrl` per portfolio item |
| `index.html` | OG image & domain | Replace `og-image.png` and `https://mkvideodit.com` |

---

## 🛡️ Rate Limiting

The backend includes an in-memory rate limiter: **5 requests per IP per 15 minutes**. For production, consider replacing with Redis-backed [`rate-limiter-flexible`](https://github.com/animir/node-rate-limiter-flexible) for multi-instance deployments.

---

## 📄 Legal

Privacy Policy and Terms & Conditions are embedded as modal overlays (no separate routes). The current text is a **template only** — have it reviewed by a qualified attorney before going live.

---

© 2025 MK Video Edit LLC · 30 N Gould St Ste R, Sheridan, Wyoming 82801
