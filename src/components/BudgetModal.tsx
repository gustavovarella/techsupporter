import React, { useState } from 'react';
import { X, Calculator, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TECH_COMPANY_INFO, SERVICES_LIST } from '../data/techData';

interface BudgetModalProps {
  initialService?: string;
  onClose: () => void;
}

export const BudgetModal: React.FC<BudgetModalProps> = ({ initialService = '', onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceType, setDeviceType] = useState('Notebook');
  const [selectedService, setSelectedService] = useState(initialService || 'Manutenção de Notebooks');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = `*Solicitação de Orçamento - TechSupporter*\n\n` +
      `*Nome:* ${name}\n` +
      `*Telefone:* ${phone}\n` +
      `*Equipamento:* ${deviceType}\n` +
      `*Serviço:* ${selectedService}\n` +
      `*Detalhes:* ${details || 'Nenhum detalhe adicional'}`;

    return `https://wa.me/${TECH_COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
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
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Solicitar Orçamento Grátis</h3>
              <p className="text-xs text-slate-400">Resposta rápida e sem compromisso</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold text-white">Dados Registrados!</h4>
              <p className="text-xs text-slate-300">
                Clique no botão abaixo para conversar diretamente com nosso técnico no WhatsApp com todos os detalhes já preenchidos.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 text-sm font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-xl shadow-neon transition-all flex items-center justify-center cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                Continuar no WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-3.5 py-2.5 bg-[#071527] text-white text-xs sm:text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(41) 99999-9999"
                    className="w-full px-3.5 py-2.5 bg-[#071527] text-white text-xs sm:text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tipo de Equipamento
                  </label>
                  <select
                    value={deviceType}
                    onChange={(e) => setDeviceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#071527] text-white text-xs sm:text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none"
                  >
                    <option value="Notebook">Notebook</option>
                    <option value="Computador Desktop">Computador Desktop</option>
                    <option value="Computador Gamer">Computador Gamer</option>
                    <option value="Servidor / Rede">Servidor / Rede</option>
                    <option value="Impressora">Impressora</option>
                    <option value="Outro">Outro Dispositivo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Serviço Desejado
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#071527] text-white text-xs sm:text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Proposta Comercial para Empresas">Proposta Comercial para Empresas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Qual é o defeito ou o que precisa ser feito?
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Ex: Notebook esquentando muito e travando na inicialização..."
                  className="w-full px-3.5 py-2.5 bg-[#071527] text-white text-xs sm:text-sm rounded-xl border border-cyan-500/20 focus:border-[#00AEEF] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs sm:text-sm font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-xl shadow-neon transition-all cursor-pointer flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Gerar Orçamento no WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
