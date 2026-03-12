import React, { useEffect, useRef } from 'react';
const flareLogo = "/logo.png";

const Services: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (sectionRef.current) {
            const animElements = sectionRef.current.querySelectorAll('.scroll-anim');
            animElements.forEach(el => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="ecosystem-section section-padding" ref={sectionRef}>
            {/* Animated Ecosystem SVG Background */}
            <svg className="eco-bg-visual" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="eco-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF3D3D" />
                        <stop offset="33%" stopColor="#FF8C00" />
                        <stop offset="66%" stopColor="#00D4FF" />
                        <stop offset="100%" stopColor="#8A2BE2" />
                    </linearGradient>
                </defs>
                <path className="eco-bg-path" d="M 350,200 L 700,500" style={{ animationDelay: '0s' }} />
                <path className="eco-bg-path" d="M 1050,200 L 700,500" style={{ animationDelay: '-2s' }} />
                <path className="eco-bg-path" d="M 350,800 L 700,500" style={{ animationDelay: '-4s' }} />
                <path className="eco-bg-path" d="M 1050,800 L 700,500" style={{ animationDelay: '-6s' }} />
                <path className="eco-bg-path"
                    d="M 200,500 C 100,200 400,100 700,500 C 1000,900 1300,800 1200,500 C 1100,200 800,100 500,500 C 200,900 300,800 200,500 Z"
                    style={{ opacity: 0.5 }} />
            </svg>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-header text-center scroll-anim slide-up" style={{ maxWidth: '800px', margin: '0 auto 5rem auto' }}>
                    <h2 className="section-badge">Platform Architecture</h2>
                    <h3 className="section-title">AI-Powered Business Ecosystem</h3>
                    <p className="section-desc mx-auto">
                        Flare Technologies combines AI automation, engineering, cloud infrastructure, marketing, and creative production into one connected ecosystem designed to help businesses build, automate, and scale faster.
                    </p>
                </div>

                <div className="eco-interactive-layout scroll-anim fade-in delay-2">
                    {/* Top: AI & Automation Systems */}
                    <div className="eco-floating-card card-top">
                        <div className="eco-glow-border"></div>
                        <div className="eco-card-header">
                            <div className="eco-icon-wrap">🤖</div>
                            <div className="eco-title-wrap">
                                <h4>AI & Automation Systems</h4>
                                <p className="eco-short-desc">Automate operations, workflows, and decision systems using intelligent AI technologies.</p>
                            </div>
                        </div>
                        <div className="card-reveal-content">
                            <ul className="card-reveal-list">
                                <li>AI Automation</li>
                                <li>AI Agents</li>
                                <li>Workflow Automation</li>
                                <li>Business Process Automation</li>
                                <li>Custom Logistics Management System</li>
                            </ul>
                        </div>
                    </div>

                    {/* Middle Left: Development & Engineering */}
                    <div className="eco-floating-card card-mid-left">
                        <div className="eco-glow-border"></div>
                        <div className="eco-card-header">
                            <div className="eco-icon-wrap">💻</div>
                            <div className="eco-title-wrap">
                                <h4>Development & Engineering</h4>
                                <p className="eco-short-desc">Design and build scalable digital platforms, applications, and custom software solutions.</p>
                            </div>
                        </div>
                        <div className="card-reveal-content">
                            <ul className="card-reveal-list">
                                <li>Website Development</li>
                                <li>Web Application Development</li>
                                <li>Software Development</li>
                                <li>Product Engineering</li>
                                <li>Agile Development Team Augmentation</li>
                            </ul>
                        </div>
                    </div>

                    {/* Central Hub: Flare Intelligence Platform - FIXED LOGO */}
                    <div className="eco-central-node">
                        <div className="central-glow"></div>
                        <div className="central-content">
                            <div className="central-icon">
                                <img
                                    src={flareLogo}
                                    alt="Flare Technologies Logo"
                                    className="w-10 h-10 object-contain mx-auto mb-2"
                                />
                            </div>
                            <h3>Flare Intelligence Platform</h3>
                        </div>
                    </div>

                    {/* Middle Right: Cloud & Infrastructure */}
                    <div className="eco-floating-card card-mid-right">
                        <div className="eco-glow-border"></div>
                        <div className="eco-card-header">
                            <div className="eco-icon-wrap">☁️</div>
                            <div className="eco-title-wrap">
                                <h4>Cloud & Infrastructure</h4>
                                <p className="eco-short-desc">Build reliable, scalable infrastructure that supports modern digital products and automation systems.</p>
                            </div>
                        </div>
                        <div className="card-reveal-content">
                            <ul className="card-reveal-list">
                                <li>Cloud Infrastructure Setup</li>
                                <li>Seamless Cloud Migration</li>
                                <li>DevOps & Deployment Systems</li>
                                <li>Scalable Backend Architecture</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom: Growth & Marketing Systems */}
                    <div className="eco-floating-card card-bottom">
                        <div className="eco-glow-border"></div>
                        <div className="eco-card-header">
                            <div className="eco-icon-wrap">📈</div>
                            <div className="eco-title-wrap">
                                <h4>Growth & Marketing Systems</h4>
                                <p className="eco-short-desc">Launch products, grow audiences, and scale businesses using data-driven marketing and creative execution.</p>
                            </div>
                        </div>
                        <div className="card-reveal-content">
                            <ul className="card-reveal-list">
                                <li>Digital Marketing</li>
                                <li>Influencer-Led Product Launch</li>
                                <li>E-commerce Growth Accelerator</li>
                                <li>Brand Identity & Digital Presence Revamp</li>
                                <li>Video Production</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
