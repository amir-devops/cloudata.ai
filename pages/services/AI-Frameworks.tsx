import React from 'react';
import './AIFrameworksHero.css';

const AIFrameworksHero: React.FC = () => {
  return (
    <section className="hero-service" style={{
      backgroundImage: `url('https://8ded8880.delivery.rocketcdn.me/themes/neuros/wp-content/uploads/2024/12/page-title-bg-min-1.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '420px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '100%'
    }}>
      <div className="hero-service-overlay"></div>
      <div className="hero-service-content">
        <h1 className="hero-service-title">
          AI Frameworks: <span>Harness the Power of NVIDIA NeMo & Riva</span>
        </h1>
        <p className="hero-service-subtitle">
          Deliver cutting‑edge NLP and speech solutions with NVIDIA’s advanced AI frameworks—tailored, scalable, and ready for your business.
        </p>
      </div>
    </section>
  );
};

export default AIFrameworksHero;
