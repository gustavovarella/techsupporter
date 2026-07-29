import React, { useState } from 'react';
import { MessageSquare, X, ShieldCheck, Zap } from 'lucide-react';
import { TECH_COMPANY_INFO } from '../data/techData';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${TECH_COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Vim pelo site da TechSupporter e gostaria de tirar uma dúvida ou pedir um orçamento.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble */}
      {showTooltip && (
        <div className="mb-3 bg-[#071527] border border-[#00AEEF]/50 rounded-2xl p-3.5 shadow-2xl max-w-xs text-xs space-y-2 animate-bounce relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-slate-800 text-slate-300 hover:text-white rounded-full p-1 border border-slate-700"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
            <span className="font-bold text-white">Precisa de ajuda com seu PC?</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight">
            Técnico online no WhatsApp! Clique para falar agora.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 bg-[#00AEEF] hover:bg-cyan-400 text-[#0B1F3A] rounded-full shadow-neon-lg transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#00AEEF] opacity-40 animate-ping pointer-events-none"></span>

        <MessageSquare className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
