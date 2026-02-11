import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image-wrapper">
            {/* Imagem principal de um escritório de alto padrão */}
            <div className="main-image">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Escritório de Arquitetura" 
              />
            </div>
            {/* Elemento flutuante decorativo */}
            <div className="floating-card">
              <span className="experience-year">15</span>
              <p>Anos de <br/>História</p>
            </div>
          </div>

          <div className="about-content">
            <span className="about-tag">Essência e Técnica</span>
            <h2 className="about-title">
              Arquitetura que reflete <span className="highlight">sua identidade</span>
            </h2>
            
            <p className="about-description">
              Com mais de uma década de atuação, transformamos a relação entre pessoas e espaços. 
              Nosso olhar une o rigor técnico da arquitetura com a sensibilidade do design de interiores, 
              criando projetos que são verdadeiros refúgios particulares.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projetos Executados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfação</span>
              </div>
            </div>

            <div className="about-quote">
              <p>
                "Cada traço é pensado para harmonizar estética, funcionalidade e o bem-estar 
                daqueles que darão vida ao ambiente."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;