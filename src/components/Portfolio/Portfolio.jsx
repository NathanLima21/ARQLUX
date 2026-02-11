import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
const projects = [
  {
    id: 1,
    title: "Residência Moderna",
    type: "Residencial",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "Integração total entre ambientes internos e externos.",
    tags: ["Contemporâneo", "Luz Natural"]
  },
  {
    id: 2,
    title: "Escritório Corporativo",
    type: "Comercial",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    description: "Design focado em produtividade e bem-estar.",
    tags: ["Funcional", "Minimalista"]
  },
  {
    id: 3,
    title: "Casa de Campo",
    type: "Residencial",
    // Foto de um interior de apartamento de alto padrão com vista e acabamento refinado
    image: "https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Reformulação completa com acabamentos nobres e vista privilegiada.",
    tags: ["Luxo", "Design"]
  },
  {
    id: 4,
    title: "Café Boutique",
    type: "Comercial",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    description: "Atmosfera acolhedora com design exclusivo.",
    tags: ["Hospitalidade", "Conceito"]
  },
  {
    id: 5,
    title: "Cozinha Gourmet",
    type: "Interiores",
    // Foto de cozinha gourmet moderna com ilha e iluminação embutida
    image: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Tecnologia e estética para amantes da alta gastronomia.",
    tags: ["Gastronomia", "Moderna"]
  },
  {
    id: 6,
    title: "Loja Conceito",
    type: "Comercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "Experiência de marca através da arquitetura inovadora.",
    tags: ["Varejo", "Inovação"]
  }
];
  return (
    <section id="projetos" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nossas Obras</span>
          <h2 className="section-title">Portfólio de Projetos</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-info">
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;