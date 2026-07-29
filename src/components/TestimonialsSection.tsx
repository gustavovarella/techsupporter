import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, CheckCircle2, Quote, UserCheck } from 'lucide-react';
import { INITIAL_TESTIMONIALS } from '../data/techData';
import { Testimonial } from '../types';
import { AddTestimonialModal } from './AddTestimonialModal';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('techsupporter_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_TESTIMONIALS;
      }
    }
    return INITIAL_TESTIMONIALS;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTestimonial = (newReview: Testimonial) => {
    const updated = [newReview, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('techsupporter_reviews', JSON.stringify(updated));
  };

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#071527] relative overflow-hidden border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-[#11284A] border border-[#00AEEF]/30 shadow-neon-sm">
              <Star className="w-3.5 h-3.5 mr-1.5 text-amber-400 fill-amber-400" />
              Avaliações de Clientes
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              O que nossos <span className="text-[#00AEEF]">Clientes Dizem</span>
            </h2>

            <p className="text-slate-300 text-base">
              Seção preparada para receber avaliações reais. Transparência, pontualidade e satisfação em cada equipamento entregue.
            </p>
          </div>

          {/* Overall Rating Badge & Add Review Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-4 rounded-2xl bg-[#0B1F3A] border border-cyan-500/20 flex items-center space-x-3">
              <div className="text-3xl font-black text-white">5.0</div>
              <div>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                  Média de Satisfação dos Clientes
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3.5 text-xs font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-xl shadow-neon transition-all duration-200 flex items-center cursor-pointer whitespace-nowrap"
            >
              <MessageSquarePlus className="w-4 h-4 mr-2" />
              Avaliar Nosso Atendimento
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="tech-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="w-8 h-8 text-[#00AEEF]/20 absolute top-4 right-4" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Service Tag */}
                <span className="inline-block text-[10px] font-bold text-[#00AEEF] bg-[#00AEEF]/10 px-2.5 py-0.5 rounded-full mb-3 border border-[#00AEEF]/20">
                  {t.serviceUsed}
                </span>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-cyan-500/10 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white text-xs flex items-center">
                    {t.name}
                    {t.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] ml-1 shrink-0" />
                    )}
                  </h4>
                  <span className="text-[10px] text-slate-400">
                    {t.role} {t.company ? `• ${t.company}` : ''}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Add Testimonial */}
      {isModalOpen && (
        <AddTestimonialModal
          onClose={() => setIsModalOpen(false)}
          onAddTestimonial={handleAddTestimonial}
        />
      )}
    </section>
  );
};
