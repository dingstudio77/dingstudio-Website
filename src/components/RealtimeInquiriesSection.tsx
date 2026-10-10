import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { ArrowUpRight, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const RealtimeInquiriesSection: React.FC = () => {
  const { inquiries, scrollToConsultation } = useStudio();
  const [filterType, setFilterType] = useState<string>('ALL');

  const filteredInquiries = inquiries.filter((inq) => {
    if (filterType === 'ALL') return true;
    return inq.type.includes(filterType) || inq.message.includes(filterType);
  });

  return (
    <section id="inquiries" className="py-20 md:py-24 bg-white border-b border-neutral-200 text-neutral-900 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-emerald-700 uppercase mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>REAL-TIME INBOUND DESK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              실시간 문의 현황
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              새로운 브랜드의 시작, 지금 이 순간에도 대표님들의 상담 요청이 실시간으로 접수되고 있습니다.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
            <span>개인정보 안심 마스킹</span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1 text-xs">
          {['ALL', '로고', '홈페이지', '상세페이지', '패키지'].map((chip) => (
            <button
              key={chip}
              onClick={() => setFilterType(chip)}
              className={`px-3 py-1.5 rounded transition-all whitespace-nowrap cursor-pointer ${
                filterType === chip
                  ? 'bg-neutral-900 text-white font-semibold'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400'
              }`}
            >
              {chip === 'ALL' ? '전체 문의 피드' : `${chip} 관련`}
            </button>
          ))}
        </div>

        {/* Real-time Inquiries Feed List (Horizontal Notification Cards matching reference structure) */}
        <div className="space-y-3">
          {filteredInquiries.slice(0, 6).map((item, idx) => (
            <div
              key={item.id}
              className={`p-4 sm:p-5 rounded-lg border transition-all duration-300 ${
                idx === 0 && item.isNew
                  ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                  : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                
                {/* Content Details */}
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#7E14C8]">
                      {item.type}
                    </span>
                    {idx === 0 && item.isNew && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>신규 접수</span>
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-medium text-neutral-900 truncate pr-2">
                    “{item.message}”
                  </p>

                  <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                    <span>{item.timestamp}</span>
                    <span className="text-neutral-300">·</span>
                    <span>{item.timeAgo}</span>
                  </div>
                </div>

                {/* Right: Crisp '문의하기 ↗' Button */}
                <button
                  onClick={() => scrollToConsultation(item.type)}
                  className="self-end sm:self-center inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded border border-neutral-200 transition-colors whitespace-nowrap cursor-pointer shadow-xs active:scale-95"
                >
                  <span>문의하기</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-Banner CTA */}
        <div className="mt-8 p-6 rounded-lg bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-neutral-900">
              어떤 패키지로 시작해야 할지 고민이신가요?
            </div>
            <div className="text-xs text-neutral-500 mt-0.5">
              상담 폼을 남겨주시면 16년차 디렉터가 1:1로 직접 검토 후 가장 효율적인 견적과 일정을 제안해드립니다.
            </div>
          </div>

          <button
            onClick={() => scrollToConsultation()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded transition-all cursor-pointer shrink-0 shadow-xs active:scale-95"
          >
            <span>나도 문의하기 →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
