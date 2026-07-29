import React from 'react';
import { ShieldCheck, Award, Users, Cpu, Clock, CheckCircle, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    { value: '+1.500', label: 'Equipamentos Reparados', icon: Cpu },
    { value: '99,8%', label: 'Clientes Satisfeitos', icon: Users },
    { value: '< 24h', label: 'Tempo Médio de Diagnóstico', icon: Clock },
    { value: '100%', label: 'Garantia e Transparência', icon: ShieldCheck },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#0B1F3A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="tech-card rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Compromisso TechSupporter</h3>
                    <p className="text-xs text-slate-400">Excelência em Assistência Técnica</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#071527] border border-cyan-500/10 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00AEEF] shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">Laboratório técnico equipado com tecnologia de ponta</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#071527] border border-cyan-500/10 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00AEEF] shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">Técnicos certificados e em constante atualização</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#071527] border border-cyan-500/10 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00AEEF] shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">Atendimento humanizado sem jargões complicados</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-cyan-500/20 text-center">
                  <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
                    Sua tranquilidade tecnológica é nossa missão
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#11284A] border border-[#00AEEF]/30 shadow-neon-sm">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Sobre Nós
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Especialistas em <br />
              <span className="text-[#00AEEF]">Soluções Tecnológicas</span>
            </h2>

            {/* Requested exact paragraphs */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              A TechSupporter Assistência Técnica nasceu com o objetivo de oferecer soluções tecnológicas de qualidade para pessoas e empresas.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Nosso compromisso é entregar atendimento rápido, transparente e eficiente, garantindo segurança e desempenho para seus equipamentos.
            </p>

            {/* Metrics Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#071527] border border-cyan-500/20 text-center space-y-1 hover:border-[#00AEEF]/50 transition-colors"
                  >
                    <IconComponent className="w-5 h-5 text-[#00AEEF] mx-auto mb-1" />
                    <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-[11px] text-slate-400 font-medium leading-tight">{stat.label}</div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
