import React, { useEffect, useRef } from 'react';

const WhyFlare: React.FC = () => {
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
        <section id="why-flare" className="why-us-section container section-padding border-top-gradient" ref={sectionRef}>
            <div className="section-header text-center scroll-anim slide-up">
                <h2 className="section-badge">Partnership</h2>
                <h3 className="section-title">Why Businesses Choose Flare</h3>
                <p className="section-desc mx-auto"
                    style={{ maxWidth: '650px', marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
                    <span style={{ color: '#00D4FF', fontWeight: 700 }}>Trusted</span> by teams building smarter systems,
                    automated operations, and scalable digital platforms.
                </p>
            </div>

            <div className="features-grid">
                <div className="feature-card scroll-anim fade-in delay-1">
                    <div className="feature-gradient-bar"></div>
                    <div className="node-icon">⚡</div>
                    <h4>Agile Delivery Model</h4>
                    <p>Flexible teams and fast execution cycles designed for modern digital businesses.</p>
                </div>
                <div className="feature-card scroll-anim fade-in delay-2">
                    <div className="feature-gradient-bar"></div>
                    <div className="node-icon">🧠</div>
                    <h4>Senior-Led Execution</h4>
                    <p>Projects are guided by experienced strategists and engineers ensuring reliable technical
                        leadership.</p>
                </div>
                <div className="feature-card scroll-anim fade-in delay-3">
                    <div className="feature-gradient-bar"></div>
                    <div className="node-icon">🛡️</div>
                    <h4>Security-First Architecture</h4>
                    <p>Systems and infrastructure are designed with stability and data security as core principles.</p>
                </div>
                <div className="feature-card scroll-anim fade-in delay-4">
                    <div className="feature-gradient-bar"></div>
                    <div className="node-icon">♾️</div>
                    <h4>AI Agents & Intelligent Automation</h4>
                    <p>Advanced AI agents automate workflows, marketing operations, and decision-making processes.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyFlare;
