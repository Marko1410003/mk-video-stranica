import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What's your typical turnaround time?",
        answer: "For most projects: short-form videos (under 5 min) are delivered in 24–48 hours. Long-form YouTube edits (10–30 min) take 48–72 hours. Rush delivery is available on request. Turnaround times are confirmed at the start of each project.",
    },
    {
        question: "How many revisions are included?",
        answer: "Every package includes 2 rounds of revisions. One revision round means a list of changes returned within 24 hours. Additional revision rounds can be added for a small fee. I aim to nail your style from the first cut so revisions are minimal.",
    },
    {
        question: "What formats do you deliver?",
        answer: "I deliver in any format you need: 16:9 for YouTube, 9:16 for TikTok/Reels/Shorts, 1:1 for Instagram feed. Files are exported in H.264 or ProRes depending on your use case. SRT subtitle files are included whenever captions are part of the project.",
    },
    {
        question: "Can you match my existing editing style?",
        answer: "Absolutely. Share 2–3 example videos of your current style or a reference you love, and I'll match the pacing, color, font style, and audio feel exactly. Style consistency is a core part of the Growth and Pro packages.",
    },
    {
        question: "Do you do thumbnail design?",
        answer: "Thumbnail design is an optional add-on for any package. I design bold, scroll-stopping thumbnails in Photoshop that match your brand colors and follow platform best practices. Ask about pricing when you get in touch.",
    },
    {
        question: "How do we send footage to each other?",
        answer: "You can share raw files via Google Drive, Dropbox, WeTransfer, or Frame.io — whichever you're already using. I'll send finished files back via the same platform. For large ongoing projects, I can set up a shared folder for smooth collaboration.",
    },
];

export const FAQ: React.FC = () => {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 relative bg-[#0f1629]" aria-label="Frequently Asked Questions">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="FAQ"
                    title="Got "
                    highlight="Questions?"
                    subtitle="Here are the most common ones. Didn't find your answer? Just reach out."
                />

                <dl className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={faq.question}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open === i
                                    ? 'border-orange-500/30 bg-orange-500/5'
                                    : 'border-white/5 bg-white/2 hover:border-white/10'
                                }`}
                        >
                            <dt>
                                <button
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                                    onClick={() => setOpen(open === i ? null : i)}
                                    aria-expanded={open === i}
                                    aria-controls={`faq-${i}`}
                                >
                                    <span className="font-semibold text-white text-base">{faq.question}</span>
                                    <ChevronDown
                                        size={18}
                                        className={`text-orange-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''
                                            }`}
                                        aria-hidden="true"
                                    />
                                </button>
                            </dt>
                            <dd
                                id={`faq-${i}`}
                                className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};
