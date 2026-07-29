import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { TECH_COMPANY_INFO, SERVICES_LIST } from '../data/techData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Manutenção de Computadores',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `*Nova Solicitação do Site - TechSupporter*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Serviço:* ${formData.serviceType}\n` +
      `*Mensagem:* ${formData.message}`;

    return `https://wa.me/${TECH_COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#11284A] border border-[#00AEEF]/30 shadow-neon-sm">
            <Mail className="w-3.5 h-3.5 mr-1.5" />
            Fale Conosco
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Entre em <span className="text-[#00AEEF]">Contato</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Solicite seu orçamento sem compromisso. Nossa equipe técnica responde com agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="tech-card rounded-3xl p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white pb-4 border-b border-cyan-500/20">
                Informações da Empresa
              </h3>

              <div className="space-y-5 text-sm">
                {/* Empresa */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Empresa
                    </span>
                    <h4 className="font-bold text-white text-base">
                      {TECH_COMPANY_INFO.name}
                    </h4>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${TECH_COMPANY_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#00AEEF] text-base block hover:underline"
                    >
                      {TECH_COMPANY_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      E-mail Profissional
                    </span>
                    <a
                      href={`mailto:${TECH_COMPANY_INFO.email}`}
                      className="font-bold text-slate-200 text-sm block hover:text-[#00AEEF]"
                    >
                      {TECH_COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Atendimento / Região */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Cobertura de Atendimento
                    </span>
                    <p className="font-medium text-slate-200 text-xs sm:text-sm">
                      {TECH_COMPANY_INFO.location}
                    </p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Horário de Funcionamento
                    </span>
                    <p className="font-medium text-slate-200 text-xs sm:text-sm">
                      {TECH_COMPANY_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Call Quick Action */}
              <div className="pt-4 border-t border-cyan-500/20">
                <a
                  href={`tel:${TECH_COMPANY_INFO.whatsappRaw}`}
                  className="w-full py-3.5 text-xs font-bold text-white bg-[#071527] hover:bg-[#11284A] border border-cyan-500/30 rounded-2xl transition-all flex items-center justify-center cursor-pointer shadow-neon-sm"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#00AEEF]" />
                  Ligar para {TECH_COMPANY_INFO.whatsappClean}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="tech-card rounded-3xl p-8 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Formulário de Solicitação
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Preencha os dados abaixo para receber um orçamento detalhado.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <CheckCircle className="w-16 h-16 text-[#00AEEF] mx-auto animate-bounce" />
                  <h4 className="text-2xl font-black text-white">
                    Solicitação Enviada com Sucesso!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Recebemos seus dados. Para agilizar ainda mais seu atendimento, você pode nos chamar diretamente no WhatsApp:
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3.5 text-xs sm:text-sm font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-2xl shadow-neon transition-all flex items-center cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                      Abrir no WhatsApp com os Dados
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3.5 text-xs font-semibold text-slate-300 hover:text-white bg-transparent border border-slate-700 rounded-2xl"
                    >
                      Enviar outro formulário
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 bg-[#071527] text-white text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(41) 99999-9999"
                        className="w-full px-4 py-3 bg-[#071527] text-white text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* E-mail */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 bg-[#071527] text-white text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                      />
                    </div>

                    {/* Tipo de Serviço */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Tipo de Serviço *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#071527] text-white text-xs sm:text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none focus:ring-1 focus:ring-[#00AEEF]"
                      >
                        {SERVICES_LIST.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Suporte Corporativo para Empresas">Suporte Corporativo para Empresas</option>
                        <option value="Outro / Não Sei Informar">Outro / Não Sei Informar</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Mensagem / Detalhes do Defeito *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva o problema do seu equipamento ou o que você precisa..."
                      className="w-full px-4 py-3 bg-[#071527] text-white text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none focus:ring-1 focus:ring-[#00AEEF] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-2xl shadow-neon transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-[1.01] active:scale-95"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Solicitação
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
