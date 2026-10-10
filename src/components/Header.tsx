import React, { useState, useEffect } from 'react';
import { useStudio } from '../context/StudioContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { dingLogoDark } from '../data/initialData';

export const Header: React.FC = () => {
  const { scrollToSection, scrollToConsultation } = useStudio();
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
    { label: 'PORTFOLIO', target: 'portfolio', koLabel: '포트폴리오' },
    { label: 'PROCESS', target: 'process', koLabel: '진행과정' },
    { label: 'PRICE', target: 'pricing', koLabel: '가격안내' },
    { label: 'REVIEW', target: 'reviews', koLabel: '고객후기' },
    { label: 'FAQ', target: 'faq', koLabel: '자주묻는질문' },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    scrollToSection(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/90 py-3 shadow-xs'
          : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Bar Contract: Zone 1 (Logo) — Zone 2 (4-6 links) — Zone 3 (1-2 actions) */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Official Brand Logo overlapping with crisp contrast */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center text-left group cursor-pointer py-0.5"
            aria-label="DING STUDIO 홈으로 이동"
          >
            <img
              src={dingLogoDark}
              alt="DING STUDIO"
              className="w-[151px] h-auto object-contain transition-transform duration-200 group-hover:scale-103"
            />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-semibold tracking-wider text-neutral-800">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="hover:text-black transition-colors cursor-pointer whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-neutral-900 hover:after:w-full after:transition-all"
              >
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToConsultation()}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-bold text-white bg-[#7E14C8] hover:bg-[#680fb2] rounded transition-all whitespace-nowrap cursor-pointer shadow-sm active:scale-95"
            >
              <span>상담 신청</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-950 rounded-md transition-colors"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-5 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="text-left py-2 border-b border-neutral-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-400">{link.koLabel}</span>
              </button>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-neutral-900 rounded"
            >
              <span>내 브랜드 무료 상담 신청</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
