import React from 'react';
import { Upload, Film, RefreshCw, Download } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const steps = [
    {
        num: '01',
        icon: Upload,
        title: 'Share Footage & References',
        desc: 'Send your raw footage plus any style references, music preferences, and instructions. Drop files via Google Drive, Dropbox, or WeTransfer — whatever works for you.',
    },
    {
        num: '02',
        icon: Film,
        title: 'I Edit the First Cut',
        desc: 'I get to work on your edit — cuts, color, captions, music, graphics. You get a first cut within the agreed turnaround time, ready for your review.',
    },
    {
        num: '03',
        icon: RefreshCw,
        title: 'Revisions (Up to 2 Rounds)',
        desc: 'Leave timestamped notes, a loom, or a simple list of changes. I make all requested revisions within 24 hours. Up to 2 revision rounds are included — additional rounds available.',
    },
    {
        num: '04',
        icon: Download,
        title: 'Final Export & Delivery',
        desc: 'I deliver the finished video in all requested formats (vertical 9:16, horizontal 16:9, square 1:1) plus SRT file if captions are included. Files handed off via your preferred cloud storage.',
    },
];

export const Process: React.FC = () => {
    return (
        <section id="process" className="py-24 relative bg-[#0A0F1E]" aria-label="Process">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/2 to-transparent pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="How It Works"
                    title="Simple 4-Step "
                    highlight="Process"
                    subtitle="From raw footage to publish-ready, I handle everything. Here's how a typical project flows."
                />

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent md:left-1/2" aria-hidden="true" />

                    <div className="space-y-12">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            const isRight = i % 2 === 0;
                            return (
                                <div
                                    key={step.num}
                                    className={`relative flex items-start gap-6 md:gap-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Step dot */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex-shrink-0 z-10">
                                        <div className="w-10 h-10 rounded-full bg-orange-500 border-4 border-[#0A0F1E] flex items-center justify-center shadow-lg shadow-orange-500/30">
                                            <Icon size={16} className="text-white" aria-hidden="true" />
                                        </div>
                                    </div>

                                    {/* Card — alternates sides on desktop */}
                                    <div className={`ml-16 md:ml-0 ${isRight ? 'md:pr-16 md:text-right md:w-1/2' : 'md:pl-16 md:w-1/2 md:ml-auto'}`}>
                                        <div className="glass-card rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-300">
                                            <div className={`flex items-center gap-3 mb-3 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                                                <span className="text-3xl font-black text-orange-500/20 leading-none">
                                                    {step.num}
                                                </span>
                                                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* File handoff callout */}
                <div className="mt-12 rounded-2xl border border-orange-500/15 bg-orange-500/5 p-6 text-center">
                    <p className="text-slate-300 text-sm">
                        <span className="font-semibold text-orange-400">File handoff options:</span> Google Drive · Dropbox · WeTransfer · Frame.io
                    </p>
                </div>
            </div>
        </section>
    );
};
