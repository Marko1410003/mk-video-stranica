import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const NAV_LINKS = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
];

const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setOpen(false);
        scrollTo(href);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[#0A0F1E]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30'
                    : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity"
                    aria-label="MK Video Edit home"
                >
                    <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-lg shadow-orange-500/30">
                        MK
                    </span>
                    <span>
                        MK <span className="text-orange-400">Video Edit</span>
                    </span>
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-6" role="list">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => handleNav(e, link.href)}
                                className="text-sm text-slate-300 hover:text-orange-400 transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden md:block">
                    <Button
                        variant="primary"
                        size="sm"
                        as="a"
                        href="#contact"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNav(e, '#contact')}
                    >
                        Get a Quote
                    </Button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-slate-300 hover:text-orange-400 transition-colors p-2"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-[#0A0F1E]/98 backdrop-blur-md border-t border-white/5 animate-fade-in">
                    <ul className="flex flex-col py-4 px-6 gap-4" role="list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNav(e, link.href)}
                                    className="block py-2 text-base text-slate-300 hover:text-orange-400 transition-colors font-medium"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Button
                                variant="primary"
                                size="md"
                                as="a"
                                href="#contact"
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNav(e, '#contact')}
                                className="w-full"
                            >
                                Get a Quote
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};
