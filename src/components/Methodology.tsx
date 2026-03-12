import React, { useEffect, useRef } from 'react';

const Methodology: React.FC = () => {
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
        <section id="methodology" className="process-section section-padding" ref={sectionRef}>
            <div className="container scroll-anim slide-up">
                <div className="section-header text-center">
                    <h2 className="section-badge">Methodology</h2>
                    <h3 className="section-title">How We Turn Ideas Into Scalable Systems</h3>
                    <p className="section-desc mx-auto"
                        style={{ maxWidth: '650px', marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
                        A repeatable system designed to move businesses from concept to scalable execution.
                    </p>
                </div>

                <div className="horizontal-timeline">
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-1-border">
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" stroke="#FF3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 01</span>
                            <h4>Strategy & System Assessment</h4>
                            <p>Identify logic bottlenecks and map measurable business outcomes.</p>
                        </div>
                    </div>
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-2-border">
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 02</span>
                            <h4>Architecture & Growth Planning</h4>
                            <p>Design the unified blueprint across marketing, AI, and systems.</p>
                        </div>
                    </div>
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-3-border">
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 03</span>
                            <h4>Implementation & Integration</h4>
                            <p>Rapid deployment using modern frameworks and agile cycles.</p>
                        </div>
                    </div>
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-4-border">
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 04</span>
                            <h4>Optimization & Continuous Scaling</h4>
                            <p>Refine automation and expand infrastructure to handle exponential load.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
