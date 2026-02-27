import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    description: string;
    before: string;
    after: string;
    // TODO: Replace with real video/thumbnail URLs
    thumbnailUrl?: string;
    videoUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: 'Fitness Creator – Weekly Vlog',
        category: 'Long-Form YouTube',
        description: 'Transformed a raw 45-min gym session into a 12-minute retention-optimized vlog with dynamic B-roll, captions, and energetic music.',
        before: 'Raw, unedited footage — no cuts, no music, no captions. Watch time was under 2 minutes average.',
        after: '18% increase in average view duration after editing, with engagement climbing 40% in 30 days.',
        // TODO: Replace with real thumbnail image URL
        thumbnailUrl: undefined,
        // TODO: Replace with real YouTube/Vimeo embed URL
        videoUrl: undefined,
    },
    {
        id: 2,
        title: 'eCommerce Brand – Product Ad',
        category: 'Short-Form / Ad Creative',
        description: 'Turned UGC clips into a punchy 30-second ad with motion graphics, color grade, and a strong CTA hook.',
        before: 'Multiple raw UGC clips in different lighting and aspect ratios.',
        after: 'Unified brand look, 3x ROAS improvement in paid ads campaign.',
        thumbnailUrl: undefined,
        videoUrl: undefined,
    },
    {
        id: 3,
        title: 'Business Podcast – Episode Clips',
        category: 'Content Repurposing',
        description: 'One 60-minute podcast episode repurposed into 8 short clips for LinkedIn, Instagram, and TikTok.',
        before: 'Single long episode sitting unused on YouTube for weeks.',
        after: 'Posted consistently for 2 weeks across platforms, tripling total weekly views.',
        thumbnailUrl: undefined,
        videoUrl: undefined,
    },
    {
        id: 4,
        title: 'Online Coach – Course Module',
        category: 'Educator / Long-Form',
        description: 'Polished 10 course lesson videos with branded slides, lower-thirds, smooth transitions, and chapter markers.',
        before: 'Screen recordings with distracting background and no post-production.',
        after: 'Finished course launched with 5-star average rating on production quality.',
        thumbnailUrl: undefined,
        videoUrl: undefined,
    },
    {
        id: 5,
        title: 'Tech Creator – TikTok Series',
        category: 'Short-Form / TikTok',
        description: 'Weekly TikTok series edits — hook-first structure, trending audio sync, captions, and fast pacing.',
        before: 'Inconsistent posting schedule; average 5k views per video.',
        after: 'Consistent weekly delivery; two videos hit 200k+ views with optimized editing.',
        thumbnailUrl: undefined,
        videoUrl: undefined,
    },
    {
        id: 6,
        title: 'Agency Client – Brand Documentary',
        category: 'Long-Form / Corporate',
        description: 'Edited a 6-minute brand story documentary with cinematic color grade, interview B-roll, and original score.',
        before: 'Multi-day shoot footage with mixed lighting and no narrative structure.',
        after: 'White-labeled delivery to agency client, used as primary homepage hero video.',
        thumbnailUrl: undefined,
        videoUrl: undefined,
    },
];

const placeholderColors = [
    'from-orange-900/40 to-navy-900/80',
    'from-blue-900/40 to-navy-900/80',
    'from-purple-900/40 to-navy-900/80',
    'from-green-900/40 to-navy-900/80',
    'from-red-900/40 to-navy-900/80',
    'from-yellow-900/40 to-navy-900/80',
];

export const Portfolio: React.FC = () => {
    const [selected, setSelected] = useState<PortfolioItem | null>(null);

    return (
        <section id="work" className="py-24 relative bg-[#0f1629]" aria-label="Portfolio">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="My Work"
                    title="Results That "
                    highlight="Speak"
                    subtitle="A sample of projects across formats and industries. Click any card to see the before & after."
                />

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item, i) => (
                        <button
                            key={item.id}
                            className="group text-left rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-orange-500"
                            onClick={() => setSelected(item)}
                            aria-label={`View ${item.title} case study`}
                        >
                            {/* Thumbnail */}
                            {/* TODO: Replace with real thumbnail: <img src={item.thumbnailUrl} alt={item.title} className="w-full aspect-video object-cover" /> */}
                            <div
                                className={`w-full aspect-video bg-gradient-to-br ${placeholderColors[i]} flex items-center justify-center relative overflow-hidden`}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Play size={20} className="text-white ml-1" aria-hidden="true" />
                                    </div>
                                </div>
                                <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-black/50 text-orange-400 border border-orange-500/20">
                                    {item.category}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="p-5 bg-[#0A0F1E]">
                                <h3 className="font-bold text-white text-base mb-1 group-hover:text-orange-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-400 line-clamp-2">{item.description}</p>
                            </div>
                        </button>
                    ))}
                </div>

                <p className="mt-6 text-center text-sm text-slate-600">
                    * All case studies shown with placeholder content. Real client videos will be added here.
                </p>
            </div>

            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selected.title}
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative max-w-2xl w-full bg-[#0f1629] rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-orange-500/20 text-white transition-colors"
                            onClick={() => setSelected(null)}
                            aria-label="Close modal"
                        >
                            <X size={18} />
                        </button>

                        {/* Video placeholder */}
                        {/* TODO: Replace with real video embed: <iframe src={selected.videoUrl} ... /> */}
                        <div className="w-full aspect-video bg-black/60 flex items-center justify-center border-b border-white/5">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full border-2 border-orange-500/50 bg-orange-500/10 flex items-center justify-center mb-3">
                                    <Play size={24} className="text-orange-400 ml-1" aria-hidden="true" />
                                </div>
                                <p className="text-slate-500 text-sm">
                                    {/* TODO: Add real video URL */}
                                    Video preview placeholder
                                </p>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <div>
                                <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">{selected.category}</span>
                                <h3 className="text-xl font-bold text-white mt-1">{selected.title}</h3>
                                <p className="text-slate-400 text-sm mt-2">{selected.description}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-red-500/5 border border-red-500/15 rounded-xl p-4">
                                    <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">Before</p>
                                    <p className="text-sm text-slate-400">{selected.before}</p>
                                </div>
                                <div className="bg-green-500/5 border border-green-500/15 rounded-xl p-4">
                                    <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2">After</p>
                                    <p className="text-sm text-slate-400">{selected.after}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
