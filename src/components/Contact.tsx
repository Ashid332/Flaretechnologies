import React, { useEffect, useRef } from 'react';

interface ContactProps {
    onOpenModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenModal }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="cta-section section-padding" ref={sectionRef}>
            <div className="container scroll-anim scale-up">
                <div className="cta-container dual-layout">
                    <div className="cta-content">
                        <h2>Build Your AI-Driven Growth System</h2>
                        <p>Partner with Flare Technologies to design intelligent systems that automate operations, accelerate marketing, and scale your digital infrastructure.</p>
                        <div className="cta-buttons-row">
                            <button onClick={onOpenModal} className="btn btn-primary btn-large">Book Consultation</button>
                            <button onClick={onOpenModal} className="btn btn-secondary btn-large">Request Strategy Audit</button>
                        </div>
                    </div>

                    <div className="cta-visual">
                        <div className="cta-glow-bg"></div>
                        <svg className="cta-ai-network" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                            <path className="network-path p-slow" d="M 50,150 L 150,100 L 250,50 L 350,150 L 250,250 L 150,200 Z" fill="none" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="2" />
                            <path className="network-path p-pulse active-flow" d="M 50,150 L 150,100 L 250,50 L 350,150 L 250,250 L 150,200 Z" fill="none" stroke="#00D4FF" strokeWidth="2" strokeDasharray="200" strokeDashoffset="200" />
                            <circle className="net-node n-1" cx="50" cy="150" r="6" fill="#00D4FF" />
                            <circle className="net-node n-2" cx="150" cy="100" r="8" fill="#FF8C00" />
                            <circle className="net-node n-3 core" cx="250" cy="50" r="10" fill="#FF3D3D" />
                            <circle className="net-node n-4" cx="350" cy="150" r="8" fill="#8A2BE2" />
                            <circle className="net-node n-5 core" cx="250" cy="250" r="12" fill="#00D4FF" />
                            <circle className="net-node n-6" cx="150" cy="200" r="6" fill="#8A2BE2" />
                            <line className="network-path p-fast" x1="150" y1="100" x2="250" y2="250" stroke="rgba(138, 43, 226, 0.3)" strokeWidth="1.5" />
                            <line className="network-path p-fast" x1="150" y1="200" x2="250" y2="50" stroke="rgba(255, 61, 61, 0.3)" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
