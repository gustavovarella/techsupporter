import React, { useState } from 'react';
import { X, Star, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';

interface AddTestimonialModalProps {
  onClose: () => void;
  onAddTestimonial: (newTestimonial: Testimonial) => void;
}

export const AddTestimonialModal: React.FC<AddTestimonialModalProps> = ({
  onClose,
  onAddTestimonial,
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [serviceUsed, setServiceUsed] = useState('Manutenção de Computadores');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: name.trim(),
      role: role.trim() || 'Cliente TechSupporter',
      rating,
      comment: comment.trim(),
      date: 'Hoje',
      serviceUsed,
      verified: true,
    };

    onAddTestimonial(newTestimonial);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#0B1F3A] border border-[#00AEEF]/40 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#071527] border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Deixar sua Avaliação</h3>
              <p className="text-xs text-slate-400">Sua opinião é fundamental para nós!</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-fadeIn">
              <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold text-white">Avaliação Enviada!</h4>
              <p className="text-xs text-slate-300">
                Muito obrigado por compartilhar sua experiência com a TechSupporter.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Ana Maria Silva"
                  className="w-full px-4 py-2.5 bg-[#071527] text-white text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Sua Profissão / Empresa (Opcional)
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Ex: Engenheira / Pessoal"
                    className="w-full px-4 py-2.5 bg-[#071527] text-white text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Serviço Utilizado
                  </label>
                  <select
                    value={serviceUsed}
                    onChange={(e) => setServiceUsed(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#071527] text-white text-xs rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none"
                  >
                    <option value="Manutenção de Computadores">Manutenção de Computadores</option>
                    <option value="Manutenção de Notebooks">Manutenção de Notebooks</option>
                    <option value="Formatação">Formatação</option>
                    <option value="Upgrade SSD">Upgrade SSD</option>
                    <option value="Limpeza Preventiva">Limpeza Preventiva</option>
                    <option value="Suporte Remoto">Suporte Remoto</option>
                    <option value="Suporte para Empresas">Suporte para Empresas</option>
                    <option value="Outro Serviço">Outro Serviço</option>
                  </select>
                </div>
              </div>

              {/* Star Rating Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Sua Nota
                </label>
                <div className="flex items-center space-x-2 bg-[#071527] p-3 rounded-xl border border-cyan-500/20 w-fit">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-125 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-amber-400 ml-2">
                    {rating}.0 de 5.0
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Seu Depoimento *
                </label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Conte como foi o atendimento da TechSupporter..."
                  className="w-full px-4 py-2.5 bg-[#071527] text-white text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-xl shadow-neon transition-all cursor-pointer"
              >
                Enviar Avaliação
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
