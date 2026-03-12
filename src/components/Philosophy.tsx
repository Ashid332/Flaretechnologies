import React, { useEffect, useRef } from 'react';

const Philosophy: React.FC = () => {
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
        <section id="philosophy" className="philosophy-section section-padding" ref={sectionRef}>
            <div className="container text-center scroll-anim slide-up">
                <h2 className="section-badge">The Flare System</h2>
                <h3 className="section-title">Beyond Isolated Services</h3>
                <p className="section-desc mx-auto" style={{ maxWidth: '800px' }}>
                    Traditional models offer fragmented solutions. Modern growth requires a unified engine. We
                    engineered the Flare System to synchronize artificial intelligence, high-performance infrastructure,
                    and creative execution into a single, interconnected platform that scales autonomously.
                </p>
            </div>
        </section>
    );
};

export default Philosophy;
