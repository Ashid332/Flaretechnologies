import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from "@/components/ui/animated-shader-hero"
import ConsultationModal from "@/components/ui/consultation-modal"

function App() {
  const [isConsultationModalOpen, setConsultationModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      e.preventDefault();
      setConsultationModalOpen(true);
    };

    // Find all vanilla buttons and links that should trigger the modal
    const elements = document.querySelectorAll('a, button');
    const targetTexts = [
      'Book Consultation',
      'Book Free Consultation',
      'Request Audit',
      'Request Strategy Audit',
      'Get My Free Strategy Audit',
      'Contact'
    ];

    const triggers: Element[] = [];

    elements.forEach(el => {
      const text = el.textContent?.trim() || '';
      const href = el.getAttribute('href');

      const isTargetText = targetTexts.some(t => text.includes(t));
      const isContactLink = href === '#contact';

      if (isTargetText || isContactLink) {
        el.addEventListener('click', handleOpenModal);
        triggers.push(el);
      }
    });

    return () => {
      triggers.forEach(el => el.removeEventListener('click', handleOpenModal));
    };
  }, []);

  return (
    <>
      <Hero
        trustBadge={{
          text: "AI-Driven Systems for Modern Businesses",
          icons: ["⚡"]
        }}
        headline={{
          line1: "AI-powered",
          line2: "business ecosystem"
        }}
        subtitle="AI automation, development, cloud infrastructure, and digital growth systems"
        buttons={{
          primary: {
            text: "Book Consultation",
            onClick: () => {
              setConsultationModalOpen(true);
            }
          },
          secondary: {
            text: "Request Strategy Audit",
            onClick: () => {
              setConsultationModalOpen(true);
            }
          }
        }}
      />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </>
  );
}

createRoot(document.getElementById('react-hero-root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
