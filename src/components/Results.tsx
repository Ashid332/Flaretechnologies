import React, { useEffect, useRef } from 'react';

const Results: React.FC = () => {
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
        <section id="results" className="results-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="section-header scroll-anim slide-up">
                    <h2 className="section-badge">Outcomes</h2>
                    <h3 className="section-title">Case Results</h3>
                    <p className="section-desc">Measurable impact spanning marketing transformation, enterprise infrastructure, and operational efficiency.</p>
                </div>

                <div className="results-grid">
                    <div className="result-card scroll-anim slide-up delay-1">
                        <div className="result-glow-border"></div>
                        <div className="result-tag">E-Commerce Brand</div>
                        <div className="result-metric text-gradient-primary">300%</div>
                        <p className="result-metric-label">Revenue Growth in Q1</p>
                        <div className="result-breakdown">
                            <div className="r-row"><span className="r-label">Challenge</span> Legacy architecture limiting concurrent global users.</div>
                            <div className="r-row"><span className="r-label">Solution</span> Edge-deployed logic & integrated influencer strategy.</div>
                        </div>
                    </div>

                    <div className="result-card scroll-anim slide-up delay-2">
                        <div className="result-glow-border"></div>
                        <div className="result-tag">B2B Logistics</div>
                        <div className="result-metric text-gradient-primary">40hrs/wk</div>
                        <p className="result-metric-label">Saved via Automation</p>
                        <div className="result-breakdown">
                            <div className="r-row"><span className="r-label">Challenge</span> Manual data transfer causing supply chain delays.</div>
                            <div className="r-row"><span className="r-label">Solution</span> Persistent AI agents handling data flow & forecasting.</div>
                        </div>
                    </div>

                    <div className="result-card scroll-anim slide-up delay-3">
                        <div className="result-glow-border"></div>
                        <div className="result-tag">Enterprise SaaS</div>
                        <div className="result-metric text-gradient-primary">Zero</div>
                        <p className="result-metric-label">Downtime during Migration</p>
                        <div className="result-breakdown">
                            <div className="r-row"><span className="r-label">Challenge</span> High risk monolithic database migration.</div>
                            <div className="r-row"><span className="r-label">Solution</span> Senior-led architecture redesign to microservices.</div>
                        </div>
                    </div>
                </div>

                <div className="trust-booster text-center scroll-anim fade-in delay-4">
                    <p>Helping businesses automate operations, launch products, and scale digital systems.</p>
                </div>
            </div>
        </section>
    );
};

export default Results;
