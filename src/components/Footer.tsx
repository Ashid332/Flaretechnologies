import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="logo">
                        <img src="/logo.png" alt="Flare Technologies Logo"
                            style={{ height: '56px', width: 'auto', mixBlendMode: 'screen', filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.4))', marginBottom: '0.5rem' }} />
                    </div>
                    <p className="footer-desc">Flare Technologies builds AI-driven systems that help modern businesses automate operations, accelerate growth, and scale with confidence.</p>
                </div>

                <div className="link-group">
                    <h4>Ecosystem</h4>
                    <a href="#growth-stack">Architecture</a>
                    <a href="#services">Solutions</a>
                    <a href="#results">Outcomes</a>
                </div>

                <div className="link-group">
                    <h4>Company</h4>
                    <a href="#why-flare">Why Flare</a>
                    <a href="#results">Case Studies</a>
                    <a href="#methodology">Methodology</a>
                </div>

                <div className="link-group" style={{ minWidth: '250px' }}>
                    <h4>Connect</h4>
                    <a href="tel:+917899104311" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        +91 78991 04311
                    </a>
                    <a href="mailto:consult@flaretechnologies.in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        consult@flaretechnologies.in
                    </a>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}>
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>Flare Technologies<br />2nd Floor, Abhyudhaya Complex<br />No. 912, 28th Main Rd<br />Putlanpalya, Jayanagara 9th Block<br />Jayanagar, Bengaluru, Karnataka 560041<br />India</span>
                    </div>
                    <div style={{ marginTop: '1rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', width: '100%', height: '180px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5835269784386!2d77.59074747596044!3d12.934473815694209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15089e9f3b11%3A0x6b4fb6c1f1ec4f7e!2s28th%20Main%20Rd%2C%20Putlanpalya%2C%20Jayanagara%209th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; 2019 Flare Technologies. All rights reserved.</p>
                <div className="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
