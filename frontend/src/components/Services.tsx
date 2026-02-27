import React from 'react';
import {
    Scissors,
    Film,
    Subtitles,
    Sparkles,
    Palette,
    Music,
    Repeat2,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const services = [
    {
        icon: Scissors,
        title: 'Short-Form Editing',
        desc: 'Viral-ready cuts for TikTok, Instagram Reels, and YouTube Shorts. Hooks in the first second, perfect pacing throughout.',
    },
    {
        icon: Film,
        title: 'Long-Form YouTube Editing',
        desc: 'Engaging full-length videos that keep watch time high — B-roll, jump cuts, on-screen text, and chapter markers included.',
    },
    {
        icon: Subtitles,
        title: 'Captions & Subtitles',
        desc: 'Burned-in styled captions for vertical video, plus SRT/VTT export for upload to any platform. Boosted accessibility, higher retention.',
    },
    {
        icon: Sparkles,
        title: 'Motion Graphics & Titles',
        desc: 'Custom lower-thirds, animated intros/outros, kinetic text, and branded overlays that make your content stand out.',
    },
    {
        icon: Palette,
        title: 'Color Correction & Grading',
        desc: 'Consistent, cinematic look across all your footage. Flat, LOG, and mixed-light sources all handled professionally.',
    },
    {
        icon: Music,
        title: 'Audio Cleanup & Sound Design',
        desc: 'Noise removal, EQ, compression, and music mixing. Your audience should never reach for the mute button.',
    },
    {
        icon: Repeat2,
        title: 'Content Repurposing',
        desc: 'Turn one long-form video into a full week of shorts. Maximize every recording session without extra filming.',
    },
];

export const Services: React.FC = () => {
    return (
        <section
            id="services"
            className="py-24 relative"
            aria-label="Services"
        >
            <div className="absolute inset-0 bg-[#0f1629]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="What I Do"
                    title="Services Built for "
                    highlight="Results"
                    subtitle="Every service is outcome-focused — more watch time, stronger brand, faster publishing."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {services.map(({ icon: Icon, title, desc }) => (
                        <article
                            key={title}
                            className="glass-card rounded-2xl p-6 hover:border-orange-500/20 hover:bg-white/5 transition-all duration-300 group flex flex-col gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                                <Icon size={22} className="text-orange-400" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                            </div>
                            <div className="mt-auto">
                                <button
                                    onClick={() => scrollTo('#contact')}
                                    className="text-sm text-orange-400 hover:text-orange-300 font-medium transition-colors underline-offset-4 hover:underline cursor-pointer"
                                    aria-label={`Request ${title} service`}
                                >
                                    Request this →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
