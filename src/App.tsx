import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CorporateSection } from './components/CorporateSection';
import { AboutSection } from './components/AboutSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BudgetModal } from './components/BudgetModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { TechService } from './types';

export default function App() {
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [budgetInitialService, setBudgetInitialService] = useState('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<TechService | null>(null);

  const handleOpenBudgetModal = (serviceTitle?: string) => {
    setBudgetInitialService(serviceTitle || '');
    setBudgetModalOpen(true);
  };

  const handleSelectDiagnostic = (serviceTitle: string) => {
    handleOpenBudgetModal(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#0B1F3A] text-slate-100 font-sans selection:bg-[#00AEEF] selection:text-[#0B1F3A]">
      {/* Header Navigation */}
      <Header onOpenBudgetModal={handleOpenBudgetModal} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Banner */}
        <Hero
          onOpenBudgetModal={handleOpenBudgetModal}
          onSelectDiagnostic={handleSelectDiagnostic}
        />

        {/* 2. Serviços */}
        <ServicesSection
          onSelectServiceDetail={setSelectedServiceDetail}
          onOpenBudgetModal={handleOpenBudgetModal}
        />

        {/* 3. Suporte para Empresas */}
        <CorporateSection onOpenBudgetModal={handleOpenBudgetModal} />

        {/* 4. Sobre Nós */}
        <AboutSection />

        {/* 5. Diferenciais */}
        <DifferentialsSection />

        {/* 6. Como Funciona */}
        <HowItWorksSection />

        {/* 7. Depoimentos */}
        <TestimonialsSection />

        {/* 8. Contato */}
        <ContactSection initialService={budgetInitialService} />
      </main>

      {/* Rodapé */}
      <Footer onOpenBudgetModal={handleOpenBudgetModal} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Budget Modal */}
      {budgetModalOpen && (
        <BudgetModal
          initialService={budgetInitialService}
          onClose={() => setBudgetModalOpen(false)}
        />
      )}

      {/* Service Detail Modal ("Saiba mais") */}
      {selectedServiceDetail && (
        <ServiceDetailModal
          service={selectedServiceDetail}
          onClose={() => setSelectedServiceDetail(null)}
          onRequestBudget={(title) => handleOpenBudgetModal(title)}
        />
      )}
    </div>
  );
}
