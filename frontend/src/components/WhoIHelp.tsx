import React from 'react';
import { Youtube, Mic, GraduationCap, ShoppingBag, Briefcase } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const audiences = [
    {
        icon: Youtube,
        title: 'Content Creators',
        platforms: 'YouTube · TikTok · Instagram',
        goals: ['Grow watch time & subscribers', 'Post consistently without burnout', 'Build a recognizable visual identity'],
        color: 'from-red-500/10 to-orange-500/5',
        border: 'border-red-500/15',
    },
    {
        icon: Mic,
        title: 'Podcasters',
        platforms: 'Video Podcasts · Clips',
        goals: ['Eye-catching episode clips for social', 'Clean multi-cam edits', 'Captions for silent scrollers'],
        color: 'from-purple-500/10 to-orange-500/5',
        border: 'border-purple-500/15',
    },
    {
        icon: GraduationCap,
        title: 'Coaches & Educators',
        platforms: 'Courses · Webinars · Social',
        goals: ['Polished course videos that convert', 'Engaging lesson pacing', 'On-brand slide transitions & graphics'],
        color: 'from-blue-500/10 to-orange-500/5',
        border: 'border-blue-500/15',
    },
    {
        icon: ShoppingBag,
        title: 'eCommerce Brands',
        platforms: 'Ads · Product Videos · UGC',
        goals: ['High-converting ad creatives', 'Product showcase videos', 'UGC editing that looks native'],
        color: 'from-green-500/10 to-orange-500/5',
        border: 'border-green-500/15',
    },
    {
        icon: Briefcase,
        title: 'Agencies',
        platforms: 'White-Label · Bulk Projects',
        goals: ['Reliable editing partner at scale', 'White-label delivery', 'Fast turnaround, no quality drop'],
        color: 'from-orange-500/10 to-yellow-500/5',
        border: 'border-orange-500/15',
    },
];

export const WhoIHelp: React.FC = () => {
    return (
        <section id="who-i-help" className="py-24 relative bg-[#0A0F1E]" aria-label="Who I Help">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Who I Work With"
                    title="Built for "
                    highlight="Every Creator"
                    subtitle="Whether you're a solo creator or a scaling agency, I've got the workflow to match your pace."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {audiences.map(({ icon: Icon, title, platforms, goals, color, border }) => (
                        <article
                            key={title}
                            className={`rounded-2xl p-6 border ${border} bg-gradient-to-b ${color} hover:scale-[1.02] transition-transform duration-300 flex flex-col gap-4`}
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <Icon size={20} className="text-orange-400" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-base mb-1">{title}</h3>
                                <p className="text-xs text-slate-500 mb-3">{platforms}</p>
                                <ul className="space-y-1.5" role="list">
                                    {goals.map((g) => (
                                        <li key={g} className="flex items-start gap-2 text-xs text-slate-400">
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" aria-hidden="true" />
                                            {g}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
