import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
    onPrivacy: () => void;
    onTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacy, onTerms }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050810] border-t border-white/5" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-black text-sm">
                                MK
                            </span>
                            <span className="font-bold text-white text-lg">
                                MK <span className="text-orange-400">Video Edit</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                            Professional video editing for creators, brands, and businesses who want to publish faster and grow smarter.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Contact</h3>
                        <div className="space-y-3">
                            <a
                                href="mailto:mkrnic03@gmail.com"
                                className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
                                aria-label="Email mkrnic03@gmail.com"
                            >
                                <Mail size={15} className="text-orange-500" aria-hidden="true" />
                                mkrnic03@gmail.com
                            </a>
                            <div className="flex items-start gap-2 text-sm text-slate-400">
                                <MapPin size={15} className="text-orange-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <address className="not-italic">
                                    MK Video Edit LLC<br />
                                    30 N Gould St Ste R<br />
                                    Sheridan, Wyoming 82801
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Quick Links</h3>
                        <ul className="space-y-2" role="list">
                            {[
                                { label: 'Services', href: '#services' },
                                { label: 'My Work', href: '#work' },
                                { label: 'Pricing', href: '#pricing' },
                                { label: 'FAQ', href: '#faq' },
                                { label: 'Contact', href: '#contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                    <p>
                        © {currentYear} MK Video Edit LLC. All rights reserved.
                    </p>
                    <div className="flex gap-5">
                        <button
                            onClick={onPrivacy}
                            className="hover:text-orange-400 transition-colors cursor-pointer"
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={onTerms}
                            className="hover:text-orange-400 transition-colors cursor-pointer"
                        >
                            Terms &amp; Conditions
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
