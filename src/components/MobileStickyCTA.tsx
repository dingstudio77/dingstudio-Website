import React from 'react';
import { useStudio } from '../context/StudioContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MobileStickyCTA: React.FC = () => {
  const { scrollToConsultation } = useStudio();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-lg safe-area-bottom">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1 text-[10px] font-bold text-[#7E14C8]">
            <Sparkles className="w-2.5 h-2.5" />
            <span>첫 시안 100% 환불 보장</span>
          </div>
          <span className="text-xs font-bold text-neutral-900 tracking-tight">
            로고 · 웹 · 상세페이지 올인원
          </span>
        </div>

        <button
          onClick={() => scrollToConsultation()}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#7E14C8] hover:bg-[#680fb2] rounded transition-transform active:scale-95 whitespace-nowrap cursor-pointer shadow-xs"
        >
          <span>상담 신청</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
