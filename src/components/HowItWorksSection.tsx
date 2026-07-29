import React from 'react';
import { MessageSquareText, HelpCircle, SearchCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/techData';

export const renderStepIcon = (iconName: string) => {
  switch (iconName) {
    case 'MessageSquareText':
      return <MessageSquareText className="w-6 h-6 text-[#00AEEF]" />;
    case 'HelpCircle':
      return <HelpCircle className="w-6 h-6 text-[#00AEEF]" />;
    case 'SearchCheck':
      return <SearchCheck className="w-6 h-6 text-[#00AEEF]" />;
    case 'CheckCircle':
      return <CheckCircle className="w-6 h-6 text-[#00AEEF]" />;
    default:
      return <CheckCircle className="w-6 h-6 text-[#00AEEF]" />;
  }
};

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#0B1F3A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#11284A] border border-[#00AEEF]/30 shadow-neon-sm">
            Passo a Passo Simples
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Como <span className="text-[#00AEEF]">Funciona</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Sem complicações ou burocracia. Veja como é fácil ter seu computador ou notebook consertado com total segurança.
          </p>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="tech-card rounded-3xl p-6 relative flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center group-hover:bg-[#00AEEF] group-hover:text-[#0B1F3A] transition-all duration-300 shadow-neon-sm">
                    {renderStepIcon(step.iconName)}
                  </div>
                  <span className="text-3xl font-black text-cyan-500/30 group-hover:text-[#00AEEF] transition-colors">
                    0{step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00AEEF] transition-colors">
                  {step.number}. {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line Indicator */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <ArrowRight className="w-6 h-6 text-[#00AEEF]/40" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
