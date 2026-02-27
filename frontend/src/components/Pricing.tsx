import React from 'react';
import { Check } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const packages = [
    {
        name: 'Starter',
        price: 'From $149',
        tagline: 'Perfect for solo creators starting out',
        popular: false,
        features: [
            '1 video per week (up to 15 min)',
            'Basic color correction',
            'Subtitles / captions included',
            'Background music sync',
            '2 revision rounds',
            '72h turnaround',
            'Delivery: 1 format',
        ],
    },
    {
        name: 'Growth',
        price: 'From $349',
        tagline: 'For creators ready to scale',
        popular: true,
        features: [
            'Up to 4 videos/month (any length)',
            'Advanced color grading',
            'Styled animated captions',
            'Motion graphics & titles',
            'Thumbnail design (1 per video)',
            '2 revision rounds (48h each)',
            '48h turnaround',
            'Multi-format export (3 formats)',
        ],
    },
    {
        name: 'Pro',
        price: 'From $799',
        tagline: 'Full-service for high-output teams',
        popular: false,
        features: [
            'Unlimited projects (fair use)',
            'Cinematic color grade + LUT',
            'Custom motion graphics package',
            'Sound design + audio mastering',
            'Content repurposing included',
            'Priority 24h turnaround',
            'All formats + SRT files',
            'Dedicated Slack/Discord channel',
        ],
    },
];

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 relative bg-[#0f1629]" aria-label="Pricing">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Pricing"
                    title="Transparent, Flexible "
                    highlight="Packages"
                    subtitle="No surprises. Pick a package or get a custom quote for ongoing work."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <article
                            key={pkg.name}
                            className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${pkg.popular
                                    ? 'bg-gradient-to-b from-orange-500/10 to-orange-500/5 border-2 border-orange-500/50 shadow-xl shadow-orange-500/10 scale-105'
                                    : 'glass-card hover:border-orange-500/20 hover:bg-white/5'
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg shadow-orange-500/30 uppercase tracking-wide">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                                <p className="text-sm text-slate-500 mb-4">{pkg.tagline}</p>
                                <p className="text-3xl font-black text-white">
                                    {pkg.price}
                                    <span className="text-sm font-normal text-slate-500 ml-1">/ project</span>
                                </p>
                            </div>

                            <ul className="space-y-3 flex-1" role="list">
                                {pkg.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                                        <Check size={16} className="flex-shrink-0 mt-0.5 text-orange-400" aria-hidden="true" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={pkg.popular ? 'primary' : 'secondary'}
                                size="md"
                                onClick={() => scrollTo('#contact')}
                                className="w-full"
                            >
                                Get Started
                            </Button>
                        </article>
                    ))}
                </div>

                <p className="mt-10 text-center text-sm text-slate-500">
                    Need ongoing monthly editing or bulk video work?{' '}
                    <button
                        className="text-orange-400 hover:text-orange-300 font-medium underline-offset-4 hover:underline transition-colors cursor-pointer"
                        onClick={() => scrollTo('#contact')}
                    >
                        Request a custom quote
                    </button>
                    {' '}— custom quotes always available.
                </p>
            </div>
        </section>
    );
};
