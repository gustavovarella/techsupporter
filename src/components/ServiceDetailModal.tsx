import React from 'react';
import { X, CheckCircle, Clock, MessageSquare, Calculator, ShieldCheck, ArrowRight, Laptop, Monitor, HardDrive, AppWindow, Zap, Cpu, Sparkles, ShieldAlert, Database, RotateCcw, Wifi, Printer, Headphones, Home, Building2, HelpCircle } from 'lucide-react';
import { TechService } from '../types';
import { TECH_COMPANY_INFO } from '../data/techData';

interface ServiceDetailModalProps {
  service: TechService | null;
  onClose: () => void;
  onRequestBudget: (serviceTitle: string) => void;
}

export const renderServiceIcon = (iconName: string, className = 'w-6 h-6') => {
  switch (iconName) {
    case 'Monitor':
      return <Monitor className={className} />;
    case 'Laptop':
      return <Laptop className={className} />;
    case 'HardDrive':
      return <HardDrive className={className} />;
    case 'AppWindow':
      return <AppWindow className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'RotateCcw':
      return <RotateCcw className={className} />;
    case 'Wifi':
      return <Wifi className={className} />;
    case 'Printer':
      return <Printer className={className} />;
    case 'Headphones':
      return <Headphones className={className} />;
    case 'Home':
      return <Home className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestBudget,
}) => {
  if (!service) return null;

  const whatsappUrl = `https://wa.me/${TECH_COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Olá! Gostaria de informações e orçamento para o serviço: *${service.title}*.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#0B1F3A] border border-[#00AEEF]/40 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="p-6 bg-[#071527] border-b border-cyan-500/20 flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF] shadow-neon-sm">
              {renderServiceIcon(service.iconName, 'w-8 h-8')}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                {service.serviceType}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200 text-sm">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Descrição do Serviço
            </h4>
            <p className="text-base text-slate-200 leading-relaxed font-normal">
              {service.fullDescription}
            </p>
          </div>

          {/* Benefits list */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              O que está incluso neste serviço
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#11284A] border border-cyan-500/10"
                >
                  <CheckCircle className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SLA / Info row */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#071527] border border-cyan-500/20 text-xs">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#00AEEF]" />
              <span className="text-slate-300">
                Tempo Médio Estimado: <strong className="text-white">{service.estimatedTime}</strong>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300">
                Garantia escrita inclusa
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#071527] border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={() => {
              onClose();
              onRequestBudget(service.title);
            }}
            className="w-full sm:w-auto px-5 py-3 text-sm font-bold text-white bg-transparent border border-[#00AEEF] hover:bg-cyan-500/10 rounded-xl transition-all cursor-pointer flex items-center justify-center shadow-neon-sm"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Solicitar Orçamento
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-neon"
          >
            <MessageSquare className="w-4 h-4 mr-2 fill-current" />
            Pedir no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
