import React from 'react';
import { Instagram, Linkedin, Youtube, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999';
    const message = 'Olá! Gostaria de conversar sobre um projeto arquitetônico.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            
            {/* Coluna 1: Branding */}
            <div className="footer-column branding">
              <div className="footer-logo">
                <h2 className="logo-main">ARC</h2>
                <span className="logo-subtitle">ARQUITETURA PREMIUM</span>
              </div>
              <p className="footer-description">
                Transformando visões em espaços extraordinários. Design autoral, 
                exclusividade e sofisticação em cada detalhe.
              </p>
              
              {/* Botões de Redes Sociais com links de teste */}
              <div className="footer-social">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
            
            {/* Coluna 2: Contato */}
            <div className="footer-column contact">
              <h3 className="footer-title">Contato</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} className="text-accent" />
                  <span>Av. Paulista, 1000 — SP</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} className="text-accent" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} className="text-accent" />
                  <span>contato@arcarquitetura.com</span>
                </div>
              </div>
              <button onClick={handleWhatsAppClick} className="footer-wa-btn">
                FALAR NO WHATSAPP <ArrowUpRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p className="copyright">
            &copy; {new Date().getFullYear()} LP CONVERT. Todos os direitos reservados.
          </p>
          <div className="footer-legal">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;