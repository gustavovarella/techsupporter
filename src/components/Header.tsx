import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, MessageSquare, Menu, X, Laptop, Cpu, Clock, MapPin } from 'lucide-react';
import { TECH_COMPANY_INFO } from '../data/techData';

interface HeaderProps {
  onOpenBudgetModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBudgetModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Suporte para Empresas', href: '#empresa' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${TECH_COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Vim pelo site da TechSupporter e gostaria de tirar uma dúvida ou solicitar um orçamento.'
  )}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Contact Strip */}
      <div className="bg-[#071527] border-b border-cyan-500/10 text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#00AEEF] mr-1.5" />
              {TECH_COMPANY_INFO.hours}
            </span>
            <span className="flex items-center text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#00AEEF] mr-1.5" />
              Curitiba e Região Metropolitana | Atendimento Remoto
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${TECH_COMPANY_INFO.whatsappRaw}`}
              className="flex items-center hover:text-[#00AEEF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-[#00AEEF]" />
              {TECH_COMPANY_INFO.whatsappClean}
            </a>
            <span className="text-cyan-500/30">|</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00AEEF] hover:underline font-medium flex items-center"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1" />
              WhatsApp Direto
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1F3A]/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20 py-3'
            : 'bg-[#0B1F3A]/80 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#inicio');
              }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#0B1F3A] p-0.5 shadow-neon-sm group-hover:shadow-neon transition-all duration-300">
                <div className="w-full h-full bg-[#0B1F3A] rounded-[10px] flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-[#00AEEF] group-hover:scale-110 transition-transform duration-300" />
                  <Cpu className="w-3 h-3 text-cyan-300 absolute bottom-1 right-1" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white flex items-center">
                  Tech<span className="text-[#00AEEF]">Supporter</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-cyan-400/80 -mt-1">
                  Assistência Técnica & TI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#00AEEF] hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => onOpenBudgetModal()}
                className="px-4 py-2 text-xs md:text-sm font-semibold text-white bg-transparent border border-[#00AEEF] hover:bg-[#00AEEF]/10 rounded-xl transition-all duration-200 cursor-pointer shadow-neon-sm"
              >
                Orçamento
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs md:text-sm font-semibold text-[#0B1F3A] bg-[#00AEEF] hover:bg-cyan-400 rounded-xl transition-all duration-200 flex items-center shadow-neon cursor-pointer hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 mr-1.5 fill-current" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#00AEEF] bg-cyan-500/10 rounded-lg border border-cyan-500/30 sm:hidden"
                title="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#00AEEF]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071527] border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-4 py-2.5 text-base font-medium text-slate-200 hover:text-[#00AEEF] hover:bg-cyan-500/10 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBudgetModal();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-transparent border border-[#00AEEF] rounded-xl shadow-neon-sm"
              >
                Solicitar Orçamento Grátis
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-sm font-semibold text-[#0B1F3A] bg-[#00AEEF] rounded-xl shadow-neon flex items-center justify-center"
              >
                <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
