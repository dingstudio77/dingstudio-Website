import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { PortfolioItem } from '../types';
import { ChevronLeft, ChevronRight, ArrowRight, X, Check } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const { portfolio, scrollToConsultation } = useStudio();
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'LOGO' | 'WEBSITE' | 'DETAIL PAGE'>('ALL');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const ITEMS_PER_PAGE = 6;

  const categoryTabs: Array<{ id: 'ALL' | 'LOGO' | 'WEBSITE' | 'DETAIL PAGE'; label: string }> = [
    { id: 'ALL', label: '전체' },
    { id: 'LOGO', label: '로고디자인' },
    { id: 'WEBSITE', label: '홈페이지' },
    { id: 'DETAIL PAGE', label: '상세페이지' },
  ];

  const filteredItems = portfolio.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const effectivePage = Math.min(currentPage, totalPages);
  const startIndex = (effectivePage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white border-b border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header (Centered matching reference image) */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-neutral-400 uppercase inline-block mb-2">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
            결과물로 증명하는 <span className="text-[#7E14C8]">브랜딩 디자인</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-500 font-normal max-w-2xl mx-auto">
            다양한 업종의 비즈니스를 더 매력적으로 만드는 실제 작업 결과물입니다.
          </p>
        </div>

        {/* Filter Tabs & Pagination Control Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
            {categoryTabs.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#1e1e1e] text-white shadow-xs font-semibold'
                      : 'bg-white text-neutral-700 hover:text-neutral-950 border border-neutral-200/90 hover:border-neutral-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <button
              onClick={handlePrevPage}
              disabled={effectivePage <= 1}
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
              aria-label="이전 페이지"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-neutral-500 font-medium px-1.5 tabular-nums">
              {effectivePage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={effectivePage >= totalPages}
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-neutral-950 hover:border-neutral-400 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
              aria-label="다음 페이지"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3x2 Grid Showcase (6 Cards Matching the Reference Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(126,20,200,0.1)] hover:border-[#7E14C8]/40 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Card Image */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Bottom Meta */}
              <div className="p-5 flex items-center justify-between gap-3 flex-1 bg-white">
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] sm:text-xs text-neutral-400 font-medium block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#7E14C8] transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 truncate">
                    {item.summary}
                  </p>
                </div>

                {/* Arrow Circle Icon Button with #7E14C8 Point Color on Hover */}
                <div className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 group-hover:bg-[#7E14C8] group-hover:text-white group-hover:border-[#7E14C8] transition-all duration-200 shrink-0 ml-2 shadow-2xs">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              if (activeCategory !== 'ALL') {
                setActiveCategory('ALL');
                setCurrentPage(1);
              } else {
                scrollToConsultation('포트폴리오 전체 검토 후 프로젝트 상담');
              }
            }}
            className="px-7 py-3 border border-neutral-900 rounded-full text-xs sm:text-sm font-semibold text-neutral-900 hover:bg-[#7E14C8] hover:border-[#7E14C8] hover:text-white transition-all duration-200 inline-flex items-center gap-2 group cursor-pointer shadow-xs active:scale-98"
          >
            <span>전체 포트폴리오 보기</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-neutral-200 rounded-2xl overflow-y-auto shadow-2xl text-neutral-900">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 text-neutral-600 hover:text-neutral-950 bg-white/90 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm cursor-pointer"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full relative bg-neutral-100">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#7E14C8] uppercase tracking-wider">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
                  {selectedItem.title}
                </h3>
                <div className="text-xs sm:text-sm text-neutral-500 mt-1">
                  클라이언트: {selectedItem.client} · 제작 기간: {selectedItem.duration}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  프로젝트 개요 & 작업 스토리
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
                  {selectedItem.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-3">
                  납품된 산출물 (Deliverables)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedItem.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/90 text-xs text-neutral-800"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-500">
                  첫 시안 불만족 시 100% 전액 환불 보장 정책 적용 대상
                </div>
                <button
                  onClick={() => {
                    const preset = `${selectedItem.title} 유사 프로젝트 상담`;
                    setSelectedItem(null);
                    scrollToConsultation(preset);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#7E14C8] hover:bg-[#680fb2] rounded-full transition-all cursor-pointer shadow-xs"
                >
                  <span>이 프로젝트 스타일로 상담받기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
