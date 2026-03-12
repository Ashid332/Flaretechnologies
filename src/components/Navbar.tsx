import React, { useState, useEffect } from 'react';

const Navbar: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHideNav, setIsHideNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            setIsScrolled(currentScroll > 50);

            if (currentScroll <= 0) {
                setIsHideNav(false);
            } else if (currentScroll > lastScroll && currentScroll > 150) {
                setIsHideNav(true);
                if (isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = 'auto';
                }
            } else {
                setIsHideNav(false);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll, isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        document.body.style.overflow = newState ? 'hidden' : 'auto';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isHideNav ? 'hide-nav' : ''}`}>
            <div className="logo">
                <img
                    src="/logo.png"
                    alt="Flare Technologies Logo"
                    className="brand-logo"
                    style={{ mixBlendMode: 'screen', filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.4))' }}
                />
            </div>

            <nav className="nav desktop-nav">
                <div className="dropdown-wrapper">
                    <a href="#services" className="dropdown-trigger">Services <span className="chevron">▾</span></a>
                    <div className="mega-menu">
                        <div className="mega-content">
                            <div className="mega-column">
                                <h5 className="mega-title">AI & Automation Systems</h5>
                                <a href="#">AI Automation</a>
                                <a href="#">Seamless Cloud Migration</a>
                                <a href="#">Custom Logistics Management</a>
                            </div>
                            <div className="mega-column">
                                <h5 className="mega-title">Growth & Marketing Systems</h5>
                                <a href="#">Digital Marketing</a>
                                <a href="#">Influencer Product Launch</a>
                                <a href="#">E-commerce Growth Accelerator</a>
                            </div>
                            <div className="mega-column">
                                <h5 className="mega-title">Content & Product Execution</h5>
                                <a href="#">Video Production</a>
                                <a href="#">Brand Identity Revamp</a>
                                <a href="#">Agile Team Augmentation</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#methodology">Methodology</a>
                <a href="#results">Results</a>
                <a href="#philosophy">About</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>Contact</a>
            </nav>

            <div className="header-actions desktop-nav">
                <button onClick={onOpenModal} className="btn btn-header-ghost">Request Audit</button>
                <button onClick={onOpenModal} className="btn btn-header-primary">Book Consultation</button>
            </div>

            <button
                className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                aria-label="Toggle menu"
                onClick={toggleMobileMenu}
            >
                <span className="hamburger"></span>
            </button>

            <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-links-container">
                    <a href="#services" className="mobile-link" onClick={closeMobileMenu}>Services</a>
                    <a href="#methodology" className="mobile-link" onClick={closeMobileMenu}>Methodology</a>
                    <a href="#results" className="mobile-link" onClick={closeMobileMenu}>Results</a>
                    <a href="#philosophy" className="mobile-link" onClick={closeMobileMenu}>About</a>
                    <a href="#contact" className="mobile-link" onClick={(e) => { e.preventDefault(); closeMobileMenu(); onOpenModal(); }}>Contact</a>
                </div>
                <div className="mobile-actions">
                    <button
                        onClick={() => { closeMobileMenu(); onOpenModal(); }}
                        className="btn btn-header-ghost btn-full mb-3"
                        style={{ marginBottom: '1rem' }}
                    >
                        Request Audit
                    </button>
                    <button
                        onClick={() => { closeMobileMenu(); onOpenModal(); }}
                        className="btn btn-header-primary btn-full"
                    >
                        Book Consultation
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
