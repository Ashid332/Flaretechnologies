import React, { useState, useEffect } from 'react';

export default function ConsultationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        goal: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsSuccess(false);
            setFormData({ name: '', email: '', phone: '', company: '', service: '', goal: '' });
            setErrors({});
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Full Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email Address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.service) newErrors.service = "Please select a service";
        if (!formData.goal.trim()) newErrors.goal = "Business Goal is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/consultation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setIsSuccess(true);
            } else {
                const data = await res.json();
                setErrors({ submit: data.error || "Submission failed. Please try again." });
            }
        } catch (err) {
            setErrors({ submit: "A network error occurred." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
        }} onClick={onClose}>

            <style>{`
        .modal-card {
          width: 520px;
          background: #0A0A1A;
          border: 1px solid rgba(255,69,0,0.4);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 0 40px rgba(255,69,0,0.15);
          animation: modalFadeIn 0.3s ease-out forwards;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,69,0,0.5) transparent;
        }
        @media (max-width: 600px) {
          .modal-card { width: 90%; padding: 25px; }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          padding: 14px 16px;
          border-radius: 10px;
          font-size: 14px;
          width: 100%;
          transition: all 0.2s;
          font-family: inherit;
        }
        .modal-input:focus {
          outline: none;
          border: 1px solid #FF4500;
          box-shadow: 0 0 0 2px rgba(255,69,0,0.25);
        }
        .modal-input option {
          background: #0A0A1A;
          color: white;
        }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #FF4500, #FF6B00);
          color: white;
          font-weight: bold;
          border: none;
          padding: 16px;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 10px;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255,69,0,0.35);
        }
        .close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: #888;
            font-size: 24px;
            cursor: pointer;
            transition: color 0.3s;
        }
        .close-btn:hover { color: white; }
        .input-error { margin-top: 5px; color: #FF4500; font-size: 12px; }
      `}</style>

            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose} aria-label="Close">&times;</button>

                {isSuccess ? (
                    <div style={{ textAlign: 'center', padding: '30px 0' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '15px' }}>
                            You're All Set! 🎉
                        </h2>
                        <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.5', marginBottom: '30px' }}>
                            Thanks {formData.name.split(' ')[0]}! Our team will contact you within 24 hours.
                        </p>
                        <button className="submit-btn" style={{ background: 'rgba(255,255,255,0.1)' }} onClick={onClose}>
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div style={{ color: '#FF4500', fontSize: '12px', letterSpacing: '1px', marginBottom: '8px', fontWeight: 'bold' }}>
                            FREE CONSULTATION
                        </div>
                        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '10px', lineHeight: '1.2' }}>
                            Book Your Free Strategy Session
                        </h2>
                        <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px', lineHeight: '1.5' }}>
                            Tell us about your business. We'll reply within 24 hours with a clear action plan.
                        </p>
                        <div style={{ height: '1px', background: 'rgba(255,69,0,0.3)', marginBottom: '25px' }}></div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1 1 calc(50% - 7.5px)' }}>
                                    <input className="modal-input" placeholder="Full Name *" name="name" value={formData.name} onChange={handleChange} />
                                    {errors.name && <div className="input-error">{errors.name}</div>}
                                </div>
                                <div style={{ flex: '1 1 calc(50% - 7.5px)' }}>
                                    <input className="modal-input" placeholder="Email Address *" name="email" value={formData.email} onChange={handleChange} />
                                    {errors.email && <div className="input-error">{errors.email}</div>}
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1 1 calc(50% - 7.5px)' }}>
                                    <input className="modal-input" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div style={{ flex: '1 1 calc(50% - 7.5px)' }}>
                                    <input className="modal-input" placeholder="Company Name" name="company" value={formData.company} onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <select className="modal-input" name="service" value={formData.service} onChange={handleChange}>
                                    <option value="" disabled>Service Interested In *</option>
                                    <option value="AI & Automation Systems">AI & Automation Systems</option>
                                    <option value="Development & Engineering">Development & Engineering</option>
                                    <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
                                    <option value="Growth & Marketing Systems">Growth & Marketing Systems</option>
                                    <option value="Full Ecosystem (All Services)">Full Ecosystem (All Services)</option>
                                    <option value="Not Sure Yet">Not Sure Yet</option>
                                </select>
                                {errors.service && <div className="input-error">{errors.service}</div>}
                            </div>

                            <div>
                                <textarea className="modal-input" placeholder="Business Goal *" name="goal" rows={3} value={formData.goal} onChange={handleChange} style={{ resize: 'vertical' }}></textarea>
                                {errors.goal && <div className="input-error">{errors.goal}</div>}
                            </div>

                            {errors.submit && <div className="input-error" style={{ textAlign: 'center' }}>{errors.submit}</div>}

                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Book My Free Consultation →"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
