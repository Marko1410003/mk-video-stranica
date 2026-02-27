import React from 'react';
import { Zap, Clock, Award, Globe, Headphones } from 'lucide-react';
import { Button } from './ui/Button';

const bullets = [
    { icon: Clock, text: '48–72h turnaround on most projects' },
    { icon: Globe, text: 'Platform-ready: TikTok, Reels, Shorts, YouTube' },
    { icon: Award, text: 'Consistent brand style every video' },
    { icon: Zap, text: 'Retention-optimized cuts & pacing' },
    { icon: Headphones, text: 'Crystal-clear audio + captions included' },
];

const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden pt-16"
            aria-label="Hero"
        >
            {/* Background gradients */}
            <div className="absolute inset-0 bg-[#0A0F1E]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: text */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium animate-fade-in-up">
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                        Available for new projects
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                        High-Impact Video Editing for{' '}
                        <span className="gradient-text">Creators Who Want to Grow</span>
                    </h1>

                    <p className="mt-6 text-lg text-slate-400 leading-relaxed animate-fade-in-up delay-200 max-w-xl">
                        From gripping hooks to satisfying endings — I handle pacing, storytelling,
                        color grading, sound, captions, and platform-specific formats so you can focus
                        on creating. Your audience stays longer. You publish faster.
                    </p>

                    {/* CTA row */}
                    <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up delay-300">
                        <Button
                            variant="primary"
                            size="lg"
                            as="a"
                            href="#contact"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                e.preventDefault();
                                scrollTo('#contact');
                            }}
                        >
                            Book a Call
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            as="a"
                            href="#work"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                e.preventDefault();
                                scrollTo('#work');
                            }}
                        >
                            See My Work
                        </Button>
                    </div>

                    {/* Bullets */}
                    <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in-up delay-400" role="list">
                        {bullets.map(({ icon: Icon, text }) => (
                            <li key={text} className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/20 flex items-center justify-center">
                                    <Icon size={15} className="text-orange-400" aria-hidden="true" />
                                </span>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: decorative video frame */}
                <div className="hidden lg:flex items-center justify-center animate-fade-in-up delay-200">
                    <div className="relative w-full max-w-md">
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-2xl scale-105" />

                        {/* Main frame */}
                        <div className="relative rounded-2xl border border-white/10 bg-[#0f1629] overflow-hidden shadow-2xl shadow-black/50">
                            {/* Fake window bar */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#141c34]">
                                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-2 text-xs text-slate-500 font-mono">project_final_v3.mp4</span>
                            </div>

                            {/* Video placeholder area */}
                            <div className="relative bg-[#050810] aspect-video flex items-center justify-center">
                                {/* Abstract motion lines */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {[...Array(6)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
                                            style={{
                                                top: `${15 + i * 14}%`,
                                                left: '0',
                                                right: '0',
                                                animationDelay: `${i * 0.3}s`,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Play button */}
                                <div className="relative w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500/50 flex items-center justify-center cursor-pointer hover:bg-orange-500/30 transition-all duration-300">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-8 h-8 text-orange-400 ml-1"
                                        aria-hidden="true"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Timeline bar */}
                            <div className="px-4 py-3 bg-[#141c34]">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-slate-500 font-mono">0:32</span>
                                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-2/5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
                                    </div>
                                    <span className="text-xs text-slate-500 font-mono">1:24</span>
                                </div>

                                {/* Waveform blocks */}
                                <div className="mt-2 flex gap-0.5 items-center h-6">
                                    {[...Array(40)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 rounded-sm"
                                            style={{
                                                height: `${Math.random() * 90 + 10}%`,
                                                backgroundColor:
                                                    i < 16 ? 'rgba(249,115,22,0.7)' : 'rgba(255,255,255,0.1)',
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-xl px-4 py-2 text-sm font-bold shadow-lg shadow-orange-500/30">
                            48h Delivery ⚡
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M12 5v14m0 0l-7-7m7 7l7-7" />
                </svg>
            </div>
        </section>
    );
};
