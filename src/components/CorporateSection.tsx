import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Headphones, Server, Network, UserCheck, LifeBuoy, CloudCheck, Activity, FileCheck2, ArrowRight, MessageSquare, Briefcase } from 'lucide-react';
import { CORPORATE_SERVICES, TECH_COMPANY_INFO } from '../data/techData';

interface CorporateSectionProps {
  onOpenBudgetModal: (serviceTitle?: string) => void;
}

export const renderCorporateIcon = (iconName: string) => {
  switch (iconName) {
    case 'Headphones':
      return <Headphones className="w-5 h-5 text-[#00AEEF]" />;
    case 'UserCheck':
      return <UserCheck className="w-5 h-5 text-[#00AEEF]" />;
    case 'LifeBuoy':
      return <LifeBuoy className="w-5 h-5 text-[#00AEEF]" />;
    case 'Network':
      return <Network className="w-5 h-5 text-[#00AEEF]" />;
    case 'Server':
      return <Server className="w-5 h-5 text-[#00AEEF]" />;
    case 'CloudCheck':
      return <CloudCheck className="w-5 h-5 text-[#00AEEF]" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5 text-[#00AEEF]" />;
    case 'Activity':
      return <Activity className="w-5 h-5 text-[#00AEEF]" />;
    case 'FileCheck2':
      return <FileCheck2 className="w-5 h-5 text-[#00AEEF]" />;
    default:
      return <Building2 className="w-5 h-5 text-[#00AEEF]" />;
  }
};

export const CorporateSection: React.FC<CorporateSectionProps> = ({ onOpenBudgetModal }) => {
  const corporateWhatsappUrl = `https://wa.me/${TECH_COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Sou de uma empresa e gostaria de solicitar uma Proposta Comercial para Contrato de Suporte de TI.'
  )}`;

  return (
    <section id="empresa" className="py-20 md:py-28 bg-[#071527] relative overflow-hidden border-y border-cyan-500/10">
      {/* Background Tech Mesh Glow */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & B2B Pitch (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#11284A] border border-[#00AEEF]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#00AEEF] shadow-neon-sm">
              <Briefcase className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>Soluções Corporativas em TI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Suporte de TI <br />
              <span className="text-[#00AEEF]">para Empresas</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              A TechSupporter oferece contratos de suporte para empresas, proporcionando atendimento remoto e presencial, manutenção preventiva e corretiva, suporte a redes, servidores, computadores e consultoria em TI.
            </p>

            {/* Business Value Badges */}
            <div className="p-5 rounded-2xl bg-[#0B1F3A] border border-cyan-500/20 space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white">Redução de Custos com TI:</strong> Evite paradas inesperadas e perda de produtividade na sua equipe.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white">SLA Prioritário:</strong> Atendimento rápido em minutos via suporte remoto ou presença técnica.
                </p>
              </div>
            </div>

            {/* Corporate Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBudgetModal('Proposta Comercial para Empresas')}
                className="w-full sm:w-auto px-7 py-4 text-sm font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-2xl shadow-neon transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                Solicitar Proposta Comercial
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href={corporateWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-slate-300 hover:text-white bg-[#11284A] border border-cyan-500/30 hover:border-[#00AEEF] rounded-2xl transition-all flex items-center justify-center cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-[#00AEEF]" />
                Contato B2B
              </a>
            </div>
          </div>

          {/* Right Column: 9 Services Interactive Grid (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="tech-card rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <ShieldCheck className="w-5 h-5 text-[#00AEEF] mr-2" />
                O que inclui nosso contrato empresarial:
              </h3>

              {/* 9 Requirements Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {CORPORATE_SERVICES.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#071527] border border-cyan-500/20 hover:border-[#00AEEF]/50 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-2.5 rounded-xl bg-[#00AEEF]/10 w-fit mb-3 group-hover:scale-110 transition-transform">
                        {renderCorporateIcon(item.iconName)}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#00AEEF] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* SLA Guarantee Note */}
              <div className="mt-6 pt-4 border-t border-cyan-500/20 flex items-center justify-between text-xs text-slate-400">
                <span className="text-cyan-400 font-semibold">
                  ⚡ Atendimento sob medida com Nota Fiscal e Contrato Formal
                </span>
                <span className="hidden sm:inline text-slate-400">
                  Curitiba & Região
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
