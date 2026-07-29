import React, { useState } from 'react';
import { MessageSquare, Calculator, ArrowRight, ShieldCheck, Zap, Laptop, Monitor, CheckCircle, Sparkles, AlertTriangle } from 'lucide-react';
import { TECH_COMPANY_INFO, QUICK_DIAGNOSTICS } from '../data/techData';

interface HeroProps {
  onOpenBudgetModal: (serviceName?: string) => void;
  onSelectDiagnostic: (serviceName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBudgetModal, onSelectDiagnostic }) => {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${TECH_COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Vim pelo site da TechSupporter e gostaria de solicitar um orçamento para meu equipamento.'
  )}`;

  const handleSymptomSelect = (id: string) => {
    setSelectedSymptom(id);
  };

  const activeDiag = QUICK_DIAGNOSTICS.find((d) => d.id === selectedSymptom);

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B1F3A]">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Circuit Pattern Graphic overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#00AEEF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge Highlight */}
            <div className="inline-flex items-center space-x-2 bg-[#11284A] border border-[#00AEEF]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00AEEF] shadow-neon-sm">
              <Zap className="w-3.5 h-3.5 animate-pulse text-[#00AEEF]" />
              <span>Diagnóstico Preciso & Atendimento Rápido</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Sua tecnologia <br className="hidden sm:inline" />
              funcionando <span className="text-[#00AEEF] drop-shadow-[0_0_25px_rgba(0,174,239,0.4)]">sem complicação.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Especialistas em manutenção de computadores, notebooks, suporte remoto, redes e soluções em tecnologia para residências e empresas.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Button 1: Solicitar Orçamento */}
              <button
                onClick={() => onOpenBudgetModal()}
                className="w-full sm:w-auto px-7 py-4 text-sm font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-2xl shadow-neon transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Solicitar Orçamento
              </button>

              {/* Button 2: Falar no WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 text-sm font-bold text-white bg-[#11284A] border border-[#00AEEF]/50 hover:bg-[#11284A]/80 hover:border-[#00AEEF] rounded-2xl shadow-neon-sm transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-[#00AEEF] fill-current" />
                Falar no WhatsApp
              </a>

              {/* Button 3: Conheça nossos serviços */}
              <a
                href="#servicos"
                className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-slate-300 hover:text-[#00AEEF] bg-transparent hover:bg-cyan-500/10 rounded-2xl transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Conheça nossos serviços
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Trust Checklist */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Orçamento Transparente</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Peças com Garantia</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Atendimento Presencial e Remoto</span>
              </div>
            </div>

          </div>

          {/* Interactive Hero Widget / Tech Showcase (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="tech-card rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Diagnóstico Rápido
                    </h3>
                    <p className="text-xs text-slate-400">
                      O que está acontecendo com seu equipamento?
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-ping"></span>
                  Online
                </span>
              </div>

              {/* Symptom Selectors */}
              <div className="space-y-2 mb-6">
                {QUICK_DIAGNOSTICS.map((diag) => (
                  <button
                    key={diag.id}
                    onClick={() => handleSymptomSelect(diag.id)}
                    className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      selectedSymptom === diag.id
                        ? 'bg-[#00AEEF] text-[#0B1F3A] font-bold shadow-neon-sm'
                        : 'bg-[#071527]/80 text-slate-200 hover:bg-[#11284A] border border-cyan-500/10 hover:border-cyan-500/30'
                    }`}
                  >
                    <span className="flex items-center truncate pr-2">
                      <AlertTriangle className={`w-3.5 h-3.5 mr-2 shrink-0 ${selectedSymptom === diag.id ? 'text-[#0B1F3A]' : 'text-[#00AEEF]'}`} />
                      <span className="truncate">{diag.symptom}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-1" />
                  </button>
                ))}
              </div>

              {/* Diagnostic Result Box */}
              {activeDiag ? (
                <div className="p-4 rounded-xl bg-[#071527] border border-[#00AEEF]/40 space-y-3 animate-fadeIn">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-cyan-400">Provável Causa:</span>
                    <p className="text-xs text-slate-300 font-medium">{activeDiag.likelyCause}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400">Solução Recomendada:</span>
                    <p className="text-xs text-emerald-300 font-semibold">{activeDiag.solution}</p>
                  </div>
                  <button
                    onClick={() => onSelectDiagnostic(activeDiag.recommendedService)}
                    className="w-full mt-2 py-2.5 px-4 text-xs font-bold text-white bg-[#00AEEF] hover:bg-cyan-400 text-[#0B1F3A] rounded-lg transition-all flex items-center justify-center cursor-pointer shadow-neon-sm"
                  >
                    Solicitar Reparo para este Problema
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#071527]/50 border border-slate-800 text-center">
                  <p className="text-xs text-slate-400">
                    💡 Clique em uma das situações acima para ver a provável causa e a solução ideal imediatamente.
                  </p>
                </div>
              )}

              {/* Quick Contact Footer inside Card */}
              <div className="mt-6 pt-4 border-t border-cyan-500/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center">
                  <Laptop className="w-3.5 h-3.5 mr-1 text-[#00AEEF]" /> PC & Notebooks
                </span>
                <span className="flex items-center">
                  <Monitor className="w-3.5 h-3.5 mr-1 text-[#00AEEF]" /> Redes & Servidores
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
