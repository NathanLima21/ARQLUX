import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          ARQ<span className="highlight">LUX</span>
        </div>

        {/* Menu de Navegação */}
        <ul className={`nav-menu ${mobileMenu ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" onClick={() => setMobileMenu(false)}>Início</a>
          </li>
          <li className="nav-item">
            <a href="#projetos" onClick={() => setMobileMenu(false)}>Projetos</a>
          </li>
          <li className="nav-item">
            <a href="#contato-sessao" onClick={() => setMobileMenu(false)}>Contato</a>
          </li>
          <li className="nav-item">
            <a href="#contato-sessao" className="nav-cta" onClick={() => setMobileMenu(false)}>
              Solicitar Orçamento
            </a>
          </li>
        </ul>

        {/* Hamburguer para Mobile */}
        <div className={`hamburger ${mobileMenu ? 'open' : ''}`} onClick={() => setMobileMenu(!mobileMenu)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;