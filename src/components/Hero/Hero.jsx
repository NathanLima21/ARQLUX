import React from "react";
import "./Hero.css";

const Hero = () => {
  // Função reutilizável para abrir o WhatsApp
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de solicitar um orçamento para um projeto arquitetônico.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">

        {/* IMAGEM */}
        <div className="hero-image-side">
          <div className="image-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100"
            alt="Projeto Arquitetônico"
          />
        </div>

        {/* TEXTO */}
        <div className="hero-text-side">
          <div className="hero-content">

            <span className="hero-tag">
              ARQUITETURA & INTERIORES
            </span>

            <h1 className="hero-title">
              Arquitetura que transforma{" "}
              <span className="highlight">espaços</span> em experiências
            </h1>

            <p className="hero-description">
              Projetos exclusivos que unem estética, funcionalidade e sofisticação
              para elevar seu padrão de vida.
            </p>

            <div className="hero-buttons">
              {/* BOTÃO ATUALIZADO */}
              <button className="btn-black" onClick={handleWhatsAppClick}>
                Solicitar orçamento
              </button>

              <button
                className="btn-whatsapp"
                onClick={handleWhatsAppClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="white"
                >
                  <path d="M19.11 17.24c-.27-.13-1.61-.8-1.86-.89-.25-.09-.43-.13-.61.13-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.35-.8-.71-1.35-1.59-1.51-1.86-.16-.27-.02-.42.12-.55.13-.13.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.82.13.18 1.9 2.9 4.61 4.06.65.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.84-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z"/>
                  <path d="M16 3C9.38 3 4 8.38 4 15c0 2.38.69 4.61 1.9 6.49L4 29l7.71-1.87A11.94 11.94 0 0016 27c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 22c-1.92 0-3.71-.56-5.23-1.52l-.37-.23-4.58 1.11 1.22-4.46-.24-.38A9.93 9.93 0 016 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z"/>
                </svg>
                Falar com o arquiteto no WhatsApp
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;