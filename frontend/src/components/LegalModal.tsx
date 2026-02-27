import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
    type: 'privacy' | 'terms' | null;
    onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (type) {
            closeRef.current?.focus();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [type]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        if (type) window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [type, onClose]);

    if (!type) return null;

    const isPrivacy = type === 'privacy';

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-title"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl max-h-[85vh] bg-[#0f1629] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                    <h2 id="legal-title" className="font-bold text-white text-lg">
                        {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
                    </h2>
                    <button
                        ref={closeRef}
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="overflow-y-auto px-6 py-5 text-sm text-slate-400 space-y-4 leading-relaxed flex-1">
                    {/* TEMPLATE NOTICE */}
                    <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs">
                        ⚠️ <strong>Template Notice:</strong> The following is a generic template for illustrative purposes only. It is not legal advice. Consult a qualified attorney before using this on a live website.
                    </div>

                    {isPrivacy ? (
                        <>
                            <p><strong className="text-white">Last Updated:</strong> February 2026</p>
                            <h3 className="text-white font-semibold mt-4">1. Information We Collect</h3>
                            <p>We collect information you provide directly when you fill out our contact form, including your name, email address, project description, and any file links. We do not collect any information through cookies or tracking technologies beyond standard web server access logs.</p>
                            <h3 className="text-white font-semibold">2. How We Use Your Information</h3>
                            <p>Information collected is used solely to respond to your inquiry, provide you with a quote, or deliver the services we agree upon. We do not sell, rent, or share your personal information with third parties except as necessary to deliver the service (e.g., cloud storage platforms for file transfer).</p>
                            <h3 className="text-white font-semibold">3. Data Retention</h3>
                            <p>We retain your contact information for as long as necessary to fulfill your project and for a reasonable period afterward for business record purposes. You may request deletion of your data at any time by emailing us.</p>
                            <h3 className="text-white font-semibold">4. Security</h3>
                            <p>We take reasonable technical and organizational measures to protect your information. No method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
                            <h3 className="text-white font-semibold">5. Third-Party Services</h3>
                            <p>We may use third-party file transfer services (Google Drive, Dropbox, WeTransfer) which have their own privacy policies. We are not responsible for the privacy practices of these services.</p>
                            <h3 className="text-white font-semibold">6. Your Rights</h3>
                            <p>You have the right to access, correct, or delete personal information we hold about you. Please contact us at mkrnic03@gmail.com for any privacy-related requests.</p>
                            <h3 className="text-white font-semibold">7. Contact</h3>
                            <p>MK Video Edit LLC · 30 N Gould St Ste R, Sheridan, Wyoming 82801 · mkrnic03@gmail.com</p>
                        </>
                    ) : (
                        <>
                            <p><strong className="text-white">Last Updated:</strong> February 2026</p>
                            <h3 className="text-white font-semibold mt-4">1. Services</h3>
                            <p>MK Video Edit LLC ("we", "us") provides professional video editing services as described on this website. The specific scope, deliverables, timeline, and pricing for each project are agreed upon individually before work begins.</p>
                            <h3 className="text-white font-semibold">2. Payment</h3>
                            <p>A deposit is required before work begins on any project. The remaining balance is due upon delivery of the final files. All payments are final once final files are delivered unless otherwise agreed in writing.</p>
                            <h3 className="text-white font-semibold">3. Revisions</h3>
                            <p>Each package includes a defined number of revision rounds as described on this website. Revisions beyond the included rounds may be billed at an additional hourly rate to be agreed upon.</p>
                            <h3 className="text-white font-semibold">4. Intellectual Property</h3>
                            <p>Upon receipt of full payment, you receive full rights to the edited video deliverables. We retain the right to display the work in our portfolio unless you request otherwise in writing. You represent that you own or have the right to use all content (footage, music, images) you provide to us.</p>
                            <h3 className="text-white font-semibold">5. Turnaround Times</h3>
                            <p>Turnaround times stated on this website are estimates and commence upon receipt of all project materials and confirmed payment. We are not liable for delays caused by incomplete or late delivery of materials by the client.</p>
                            <h3 className="text-white font-semibold">6. Limitation of Liability</h3>
                            <p>Our total liability for any claim arising from our services is limited to the amount paid for the specific project in question. We are not liable for indirect damages, lost profits, or consequential losses.</p>
                            <h3 className="text-white font-semibold">7. Governing Law</h3>
                            <p>These terms are governed by the laws of the State of Wyoming, USA. Any disputes shall be resolved in the courts of Sheridan County, Wyoming.</p>
                            <h3 className="text-white font-semibold">8. Contact</h3>
                            <p>MK Video Edit LLC · 30 N Gould St Ste R, Sheridan, Wyoming 82801 · mkrnic03@gmail.com</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
