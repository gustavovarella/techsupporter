import React from 'react';
import { Laptop, Cpu, Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { TECH_COMPANY_INFO } from '../data/techData';

interface FooterProps {
  onOpenBudgetModal: (serviceTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBudgetModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${TECH_COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Vim pelo site da TechSupporter e gostaria de solicitar um orçamento.'
  )}`;

  return (
    <footer className="bg-[#071527] border-t border-cyan-500/20 text-slate-300 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1-5: Brand & Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#0B1F3A] p-0.5 shadow-neon-sm">
                <div className="w-full h-full bg-[#0B1F3A] rounded-[10px] flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-[#00AEEF]" />
                </div>
              </div>
              <span className="text-xl font-black text-white">
                Tech<span className="text-[#00AEEF]">Supporter</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              <strong>TechSupporter Assistência Técnica</strong> — Especialistas em manutenção de computadores, notebooks, redes e suporte corporativo em TI.
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-300">
              <p className="flex items-center">
                <MessageSquare className="w-4 h-4 text-[#00AEEF] mr-2 shrink-0" />
                <strong>WhatsApp:</strong>&nbsp;
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline font-bold">
                  {TECH_COMPANY_INFO.whatsapp}
                </a>
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 text-[#00AEEF] mr-2 shrink-0" />
                {TECH_COMPANY_INFO.hours}
              </p>
            </div>
          </div>

          {/* Col 6-8: Quick Links requested */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#00AEEF]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#inicio');
                  }}
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#servicos');
                  }}
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#empresa"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#empresa');
                  }}
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  Suporte para Empresas
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#sobre');
                  }}
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contato');
                  }}
                  className="hover:text-[#00AEEF] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Trust Badges & Action */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#00AEEF]">
              Solicite um Atendimento
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendimento rápido para residências e empresas em Curitiba e Região Metropolitana, além de suporte remoto para todo o Brasil.
            </p>

            <button
              onClick={() => onOpenBudgetModal()}
              className="w-full py-3 px-4 text-xs font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-xl shadow-neon transition-all cursor-pointer"
            >
              Pedir Orçamento Grátis
            </button>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} <strong>TechSupporter Assistência Técnica</strong>. Todos os direitos reservados.
          </p>

          <p className="flex items-center text-[11px] text-slate-400">
            <span>Desenvolvido com tecnologia de alta performance</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
