import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, Info } from 'lucide-react';
import './Form.css';

const Form = () => {
  const initialFormState = {
    nome: '',
    whatsapp: '',
    email: '',
    tipoProjeto: '',
    mensagem: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypes = [
    { value: '', label: 'Selecione o tipo de projeto' },
    { value: 'residencial', label: 'Residencial - Casa/Apartamento' },
    { value: 'comercial', label: 'Comercial - Escritório/Loja' },
    { value: 'reforma', label: 'Reforma/Ampliação' },
    { value: 'interiores', label: 'Design de Interiores' },
    { value: 'outro', label: 'Outro' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      
      const phoneNumber = '5511999999999';
      const message = `Olá! Me chamo ${formData.nome}. Gostaria de conversar sobre um projeto ${formData.tipoProjeto}.`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      setTimeout(() => { window.open(whatsappUrl, '_blank'); }, 2000);
    } catch (error) {
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section id="form" className="form-section success">
        <div className="container">
          <div className="success-message">
            <div className="success-icon"><CheckCircle2 size={64} /></div>
            <h2 className="section-title">Solicitação Recebida</h2>
            <p className="success-text">
              Sua jornada para o projeto ideal começou. Em instantes abriremos seu WhatsApp para uma conversa personalizada.
            </p>
            <button onClick={resetForm} className="btn-back">
              Voltar ao formulário
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato-sessao" className="form-section">
      <div className="container">
        <div className="form-header">
          <span className="section-tag">Contato</span>
          <h2 className="section-title">Vamos criar o <span className="highlight">extraordinário</span>?</h2>
          <p className="form-subtitle">Preencha os detalhes abaixo e receba uma consultoria inicial exclusiva.</p>
        </div>

        <div className="form-container">
          <div className="form-content">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Nome Completo *</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome:" required className="form-input" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>WhatsApp *</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="(00) 00000-0000" required className="form-input" />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label>Tipo de Projeto *</label>
                <select name="tipoProjeto" value={formData.tipoProjeto} onChange={handleChange} required className="form-select">
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Mensagem</label>
                <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Conte-nos brevemente sobre sua visão..." rows="4" className="form-textarea" />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Processando..." : "Iniciar Consultoria Gratuita"}
              </button>
            </form>
          </div>

          <div className="form-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title"><Info size={20} /> O que esperar?</h3>
              <ul className="sidebar-list">
                <li><strong>Retorno Ágil:</strong> Contato em até 2h comerciais.</li>
                <li><strong>Expertise:</strong> Alinhamento direto com o arquiteto.</li>
                <li><strong>Proposta:</strong> Orçamento detalhado e transparente.</li>
              </ul>
            </div>

            {/* CARD WHATSAPP ATUALIZADO */}
            <div className="whatsapp-card">
              <h4>Atendimento Imediato</h4>
              <p>Segunda a Sexta, das 9h às 18h</p>
              <button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')} 
                className="btn-wa-direct"
              >
                {/* SVG Oficial do WhatsApp */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.896 9.885z" />
                </svg>
                Falar agora via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;