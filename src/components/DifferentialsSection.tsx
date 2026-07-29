import React from 'react';
import { Zap, Award, Monitor, Building, FileText, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';
import { DIFFERENTIALS } from '../data/techData';

export const renderDifferentialIcon = (iconName: string) => {
  switch (iconName) {
    case 'Zap':
      return <Zap className="w-6 h-6 text-[#00AEEF]" />;
    case 'Award':
      return <Award className="w-6 h-6 text-[#00AEEF]" />;
    case 'Monitor':
      return <Monitor className="w-6 h-6 text-[#00AEEF]" />;
    case 'Building':
      return <Building className="w-6 h-6 text-[#00AEEF]" />;
    case 'FileText':
      return <FileText className="w-6 h-6 text-[#00AEEF]" />;
    case 'CheckCircle2':
      return <CheckCircle2 className="w-6 h-6 text-[#00AEEF]" />;
    case 'HeartHandshake':
      return <HeartHandshake className="w-6 h-6 text-[#00AEEF]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#00AEEF]" />;
  }
};

export const DifferentialsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-[#071527] relative overflow-hidden border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#11284A] border border-[#00AEEF]/30 shadow-neon-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Por que escolher a TechSupporter?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Nossos <span className="text-[#00AEEF]">Diferenciais</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Focamos na máxima satisfação do cliente combinando agilidade, ética profissional e elevado padrão técnico em cada atendimento.
          </p>
        </div>

        {/* 7 Differentials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((item, index) => (
            <div
              key={item.id}
              className={`tech-card rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 ${
                index === 6 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3.5 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 group-hover:bg-[#00AEEF] group-hover:text-[#0B1F3A] transition-all duration-300 shrink-0 shadow-neon-sm">
                  {renderDifferentialIcon(item.iconName)}
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="text-[#00AEEF] font-bold text-sm">✔</span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#00AEEF] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
