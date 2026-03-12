import React, { useEffect, useRef } from 'react';

const GrowthStack: React.FC = () => {
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
        <section id="growth-stack" className="stack-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="stack-layout">
                    <div className="stack-content scroll-anim slide-right">
                        <h2 className="section-badge">Architecture</h2>
                        <h3 className="section-title">A Unified Growth<br />Technology Ecosystem.</h3>
                        <p className="section-desc">Flare integrates marketing, automation, infrastructure, and engineering
                            into one scalable framework. Instead of isolated services, we deploy a connected engine
                            designed for exponential results.</p>

                        <ul className="stack-list">
                            <li>
                                <div className="list-dot" style={{ background: '#00D4FF', boxShadow: '0 0 10px #00D4FF' }}></div>
                                <div>
                                    <h5>Execution & Growth Operations</h5>
                                    <p>Digital marketing, content production, and conversion systems that drive
                                        measurable acquisition.</p>
                                </div>
                            </li>
                            <li>
                                <div className="list-dot" style={{ background: '#5A5AFF', boxShadow: '0 0 10px #5A5AFF' }}></div>
                                <div>
                                    <h5>Infrastructure & Automation</h5>
                                    <p>Scalable cloud hosting, AI agents, and workflows that handle repetitive
                                        operations autonomously.</p>
                                </div>
                            </li>
                            <li>
                                <div className="list-dot" style={{ background: '#8A2BE2', boxShadow: '0 0 10px #8A2BE2' }}></div>
                                <div>
                                    <h5>Data & Intelligence</h5>
                                    <p>Predictive modeling, custom logistics, and telemetry that inform structural
                                        business decisions.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="stack-visual scroll-anim slide-left">
                        <div className="layer layer-3 data-layer">
                            <span>DATA & INTELLIGENCE</span>
                        </div>
                        <div className="layer layer-2 infra-layer">
                            <span>INFRASTRUCTURE & AUTOMATION</span>
                        </div>
                        <div className="layer layer-1 growth-layer">
                            <span>EXECUTION & GROWTH</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthStack;
