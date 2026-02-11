import React from 'react';
import { PenTool, Ruler, Clock, ShieldCheck } from 'lucide-react';
import './Features.css';

const Features = () => {
  const data = [
    {
      icon: <PenTool size={28} />,
      title: "Design Autoral",
      desc: "Projetos únicos que traduzem a personalidade de cada cliente em cada detalhe."
    },
    {
      icon: <Ruler size={28} />,
      title: "Rigor Técnico",
      desc: "Precisão absoluta desde a medição inicial até a entrega final da obra."
    },
    {
      icon: <Clock size={28} />,
      title: "Gestão de Prazos",
      desc: "Cronogramas realistas e acompanhamento fiel para garantir sua tranquilidade."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Qualidade Premium",
      desc: "Curadoria de materiais e fornecedores de alto padrão para durabilidade eterna."
    }
  ];

  return (
    <section id="servicos" className="features">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Diferenciais</span>
          <h2 className="section-title">Por que escolher a <span className="highlight">ARQLUX</span>?</h2>
          <p className="section-subtitle">
            Unimos a tradição da arquitetura clássica com a inovação tecnológica para criar o extraordinário.
          </p>
        </div>

        <div className="features-grid">
          {data.map((item, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{item.icon}</div>
                <div className="icon-backdrop"></div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.desc}</p>
              </div>
              <div className="feature-decoration">
                <div className="decoration-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;