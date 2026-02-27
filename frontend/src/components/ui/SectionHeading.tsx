import React from 'react';

interface SectionHeadingProps {
    badge?: string;
    title: string;
    highlight?: string;
    subtitle?: string;
    center?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    badge,
    title,
    highlight,
    subtitle,
    center = true,
}) => {
    const fullTitle = highlight
        ? title.replace(highlight, `|||${highlight}|||`)
        : title;
    const parts = highlight ? fullTitle.split('|||') : [title];

    return (
        <div className={`mb-12 ${center ? 'text-center' : ''}`}>
            {badge && (
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {parts.map((part, i) =>
                    part === highlight ? (
                        <span key={i} className="gradient-text">
                            {part}
                        </span>
                    ) : (
                        <span key={i}>{part}</span>
                    )
                )}
            </h2>
            {subtitle && (
                <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
            )}
        </div>
    );
};
