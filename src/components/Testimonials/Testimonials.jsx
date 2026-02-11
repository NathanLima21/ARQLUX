import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Mariana Siqueira",
      project: "Reforma Apartamento Jardins",
      location: "São Paulo, SP",
      quote: "O olhar da ARQLUX transformou completamente minha percepção de casa. Cada detalhe, da iluminação à escolha dos materiais, reflete exatamente o que eu sempre sonhei.",
      rating: 5
    },
    {
      name: "Ricardo Mendes",
      project: "Escritório Corporate Tower",
      location: "Curitiba, PR",
      quote: "Profissionalismo impecável. O cronograma foi seguido à risca e a gestão da obra nos deu uma tranquilidade que nunca tivemos em projetos anteriores.",
      rating: 5
    },
    {
      name: "Helena Bittencourt",
      project: "Cozinha Gourmet e Área Grill",
      location: "Belo Horizonte, MG",
      quote: "A funcionalidade que trouxeram para a minha cozinha é inacreditável. Além de linda, agora é o lugar mais prático da casa. Receber amigos virou um evento de luxo.",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      project: "Loja Conceito Minimalista",
      location: "Rio de Janeiro, RJ",
      quote: "Eles entenderam a identidade da minha marca de primeira. O espaço físico hoje atrai clientes só pelo design da fachada e a experiência interna de compra.",
      rating: 5
    },
    {
      name: "Beatriz e Paulo",
      project: "Residência de Verão",
      location: "Ilhabela, SP",
      quote: "Construir à distância parecia impossível, mas a equipe cuidou de tudo. A integração com a natureza ficou divina, exatamente como as maquetes 3D mostravam.",
      rating: 5
    }
  ];

  const nextSlide = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title">A voz de quem <span className="highlight">confia em nós</span></h2>
        </div>

        <div className="testimonials-slider">
          <div className="slider-controls">
            <button className="slider-btn" onClick={prevSlide}><ChevronLeft /></button>
            <button className="slider-btn" onClick={nextSlide}><ChevronRight /></button>
          </div>

          <div className="testimonials-track">
            <div className="testimonials-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="quote-icon"><Quote /></div>
                    
                    <div className="testimonial-rating">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} fill="#8b7355" color="#8b7355" size={16} />)}
                    </div>

                    <p className="testimonial-quote">"{t.quote}"</p>

                    <div className="testimonial-info">
                      <div className="client-info">
                        <h4 className="client-name">{t.name}</h4>
                        <p className="client-project">{t.project}</p>
                      </div>
                      <span className="client-location">{t.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`dot ${current === i ? 'active' : ''}`} onClick={() => setCurrent(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;