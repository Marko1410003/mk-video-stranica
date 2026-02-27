import React from 'react';
import { Quote } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const testimonials = [
    {
        quote: "My YouTube channel went from 2-minute average view duration to over 8 minutes after switching to MK Video Edit. The editing is tight, the pacing is exactly what my audience wants.",
        name: 'Jordan R.',
        title: 'Content Creator, 200k+ Subscribers',
        initials: 'JR',
    },
    {
        quote: "We outsourced our product ad editing and saw a 3x ROAS improvement within the first month. Fast turnaround, understands brand voice, and zero back-and-forth headaches.",
        name: 'Priya K.',
        title: 'eCommerce Brand Owner',
        initials: 'PK',
    },
    {
        quote: "Repurposing our podcast into weekly clips has completely changed our social media game. We're posting 5x more without filming a single extra minute of content.",
        name: 'Marcus T.',
        title: 'Business Podcast Host, 50k+ Listeners',
        initials: 'MT',
    },
    {
        quote: "As an agency, we needed a reliable editing partner who could hit deadlines every time. MK Video Edit delivers broadcast-quality work consistently and communicates perfectly.",
        name: 'Sofia L.',
        title: 'Creative Agency Director',
        initials: 'SL',
    },
];

const starRating = (
    <div className="flex gap-1" aria-label="5 star rating">
        {[...Array(5)].map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-orange-400" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 relative bg-[#0A0F1E]" aria-label="Testimonials">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Client Results"
                    title="What Clients "
                    highlight="Say"
                    subtitle="Real feedback from creators and brands who leveled up their video content."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t) => (
                        <blockquote
                            key={t.name}
                            className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-orange-500/20 transition-all duration-300"
                        >
                            <Quote size={20} className="text-orange-500/40" aria-hidden="true" />
                            <p className="text-sm text-slate-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                            {starRating}
                            <footer className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-xs flex-shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <cite className="font-semibold text-white text-sm not-italic">{t.name}</cite>
                                    <p className="text-xs text-slate-500">{t.title}</p>
                                </div>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};
