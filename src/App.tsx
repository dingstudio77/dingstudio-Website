import React from 'react';
import { StudioProvider } from './context/StudioContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export default function App() {
  return (
    <StudioProvider>
      <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
        {/* Navigation Top Bar Contract */}
        <Header />

        <main className="flex-1">
          {/* 1. 히어로 섹션 */}
          <HeroSection />

          {/* 2. 수치로 증명합니다 */}
          <MetricsSection />

          {/* 3. 포트폴리오 */}
          <PortfolioSection />

          {/* 4. 진행과정 (WORK PROCESS) */}
          <ProcessSection />

          {/* 5. 가격안내 (PRICE & PACKAGES) */}
          <PricingSection />

          {/* 6. 고객후기 */}
          <ReviewsSection />

          {/* 7. 자주 묻는 질문 (FAQ) - 설문지 바로 위 섹션 */}
          <FaqSection />

          {/* 8. 설문지 (상담문의 폼) */}
          <ConsultationSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Persistent Bottom CTA (within 15% mobile viewport height limit) */}
        <MobileStickyCTA />

        {/* Studio Admin CMS Modal for Live Price/Refund/Metrics/Review/Inquiries Editing */}
        <AdminModal />
      </div>
    </StudioProvider>
  );
}
