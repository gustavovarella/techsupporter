import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../data/techData';
import { TechService, ServiceCategory } from '../types';
import { renderServiceIcon } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceDetail: (service: TechService) => void;
  onOpenBudgetModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceDetail,
  onOpenBudgetModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'hardware', label: 'Hardware & Peças' },
    { id: 'software', label: 'Software & Formatação' },
    { id: 'redes', label: 'Wi-Fi & Redes' },
    { id: 'atendimento', label: 'Suporte & Residencial' },
    { id: 'corporativo', label: 'Empresarial' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory =
      activeCategory === 'todos' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#11284A] border border-[#00AEEF]/30 shadow-neon-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Catálogo de Soluções
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Nossos <span className="text-[#00AEEF]">Serviços Especializados</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Oferecemos assistência completa e especializada em computadores, notebooks, redes e suporte técnico. Escolha a solução que você precisa.
          </p>
        </div>

        {/* Filter Chips & Search Bar */}
        <div className="mb-10 space-y-4">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar serviço (ex: SSD, Formatação, Vírus)..."
              className="w-full pl-11 pr-4 py-3 bg-[#071527] text-slate-100 placeholder-slate-400 text-sm rounded-2xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none focus:ring-1 focus:ring-[#00AEEF] transition-all shadow-inner"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#00AEEF] text-[#0B1F3A] shadow-neon font-bold scale-105'
                    : 'bg-[#11284A]/70 text-slate-300 hover:text-white hover:bg-[#11284A] border border-cyan-500/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="tech-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Popular Tag */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#00AEEF] to-cyan-600 text-[#0B1F3A] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md flex items-center">
                  <Zap className="w-3 h-3 mr-1 fill-current" /> Destaque
                </div>
              )}

              <div>
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#00AEEF] group-hover:text-[#0B1F3A] transition-all duration-300 shadow-neon-sm">
                  {renderServiceIcon(service.iconName, 'w-6 h-6')}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00AEEF] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed font-normal">
                  {service.shortDescription}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-cyan-500/10 flex items-center justify-between gap-2 mt-2">
                <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg">
                  {service.serviceType}
                </span>

                <button
                  onClick={() => onSelectServiceDetail(service)}
                  className="px-4 py-2 text-xs font-bold text-[#00AEEF] hover:text-white bg-cyan-500/10 hover:bg-[#00AEEF] rounded-xl transition-all duration-200 flex items-center cursor-pointer group/btn"
                >
                  Saiba mais
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-[#071527] rounded-3xl border border-cyan-500/20">
            <p className="text-slate-300 font-medium text-base mb-4">
              Nenhum serviço encontrado para "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todos');
              }}
              className="px-5 py-2.5 text-xs font-bold text-[#0B1F3A] bg-[#00AEEF] rounded-xl shadow-neon cursor-pointer"
            >
              Ver todos os serviços
            </button>
          </div>
        )}

        {/* Bottom Call to Action for Custom Request */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#11284A] via-[#071527] to-[#11284A] border border-cyan-500/30 p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white">
              Não encontrou o serviço exato que precisa?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Realizamos diagnósticos sob medida para qualquer tipo de problema técnico em TI.
            </p>
          </div>
          <button
            onClick={() => onOpenBudgetModal('Serviço Personalizado')}
            className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-xl shadow-neon transition-all cursor-pointer whitespace-nowrap"
          >
            Falar com um Técnico Agora
          </button>
        </div>

      </div>
    </section>
  );
};
