import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

const PROJECT_TYPES = [
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

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
    name: string;
    email: string;
    projectType: string;
    message: string;
    footageLink: string;
}

export const Contact: React.FC = () => {
    const [formState, setFormState] = useState<FormState>('idle');
    const [data, setData] = useState<FormData>({
        name: '',
        email: '',
        projectType: '',
        message: '',
        footageLink: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');

        // Static mode: open mailto with form data pre-filled
        const subject = encodeURIComponent(
            `[MK Video Edit] Enquiry from ${data.name} – ${data.projectType}`
        );
        const body = encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}\nFootage Link: ${data.footageLink || 'Not provided'}\n\nMessage:\n${data.message}`
        );
        window.open(`mailto:mkrnic03@gmail.com?subject=${subject}&body=${body}`, '_blank');
        setFormState('success');
    };


    const inputClasses =
        'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all duration-200';
    const labelClasses = 'block text-sm font-medium text-slate-300 mb-2';

    return (
        <section id="contact" className="py-24 relative bg-[#0A0F1E]" aria-label="Contact">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/2 to-transparent pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Let's Work Together"
                    title="Ready to "
                    highlight="Get Started?"
                    subtitle="Fill out the form below and I'll get back to you within 24 hours with a tailored quote."
                />

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Left sidebar */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="font-bold text-white mb-4">Prefer direct contact?</h3>
                            <a
                                href="mailto:mkrnic03@gmail.com"
                                className="flex items-center gap-3 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium mb-4"
                                aria-label="Email mkrnic03@gmail.com"
                            >
                                <Mail size={18} aria-hidden="true" />
                                mkrnic03@gmail.com
                            </a>
                            {/* TODO: Replace with real Calendly link */}
                            <a
                                href="https://calendly.com/TODO_REPLACE_WITH_REAL_LINK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
                                aria-label="Book a call on Calendly (opens in new tab)"
                            >
                                <Phone size={18} aria-hidden="true" />
                                Book a Call (Calendly)
                            </a>
                        </div>

                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="font-bold text-white mb-3">Typical Response Time</h3>
                            <p className="text-sm text-slate-400">
                                I respond to all inquiries within <span className="text-orange-400 font-medium">24 hours</span>, usually faster. For urgent projects, mention it in your message.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="font-bold text-white mb-3">What Happens Next?</h3>
                            <ol className="space-y-2 text-sm text-slate-400 list-none">
                                {['You fill out the form', "I reply with a quote + timeline", "We agree on scope & you pay deposit", "I start editing!"].map((s, i) => (
                                    <li key={s} className="flex gap-3">
                                        <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                                        {s}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        {formState === 'success' ? (
                            <div className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                                <CheckCircle size={52} className="text-green-400" aria-hidden="true" />
                                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                <p className="text-slate-400 max-w-sm">
                                    Thanks for reaching out! I'll review your project details and get back to you within 24 hours.
                                </p>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => { setFormState('idle'); setData({ name: '', email: '', projectType: '', message: '', footageLink: '' }); }}
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5" noValidate>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className={labelClasses}>
                                            Your Name <span className="text-orange-500" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            autoComplete="name"
                                            placeholder="Jane Smith"
                                            value={data.name}
                                            onChange={handleChange}
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={labelClasses}>
                                            Email <span className="text-orange-500" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="jane@example.com"
                                            value={data.email}
                                            onChange={handleChange}
                                            className={inputClasses}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="projectType" className={labelClasses}>
                                        Project Type <span className="text-orange-500" aria-hidden="true">*</span>
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        required
                                        value={data.projectType}
                                        onChange={handleChange}
                                        className={`${inputClasses} cursor-pointer`}
                                    >
                                        <option value="" disabled className="bg-[#0f1629]">Select a service...</option>
                                        {PROJECT_TYPES.map((t) => (
                                            <option key={t} value={t} className="bg-[#0f1629]">{t}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="footageLink" className={labelClasses}>
                                        Footage / Reference Link
                                        <span className="ml-1 text-slate-600 font-normal">(optional — Drive, Dropbox, WeTransfer…)</span>
                                    </label>
                                    <input
                                        id="footageLink"
                                        name="footageLink"
                                        type="url"
                                        placeholder="https://drive.google.com/..."
                                        value={data.footageLink}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className={labelClasses}>
                                        Message <span className="text-orange-500" aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project — what do you need edited, what's your style, what's your deadline?"
                                        value={data.message}
                                        onChange={handleChange}
                                        className={`${inputClasses} resize-none`}
                                    />
                                </div>




                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={formState === 'loading'}
                                >
                                    {formState === 'loading' ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin mr-2" aria-hidden="true" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} className="mr-2" aria-hidden="true" />
                                            Send Message
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-slate-600 text-center">
                                    By submitting this form you agree to our{' '}
                                    <span className="text-slate-500">Privacy Policy</span>.
                                    Your information is never shared.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
