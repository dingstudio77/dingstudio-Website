import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: '비즈니스 심층 상담',
    description: '업종, 타겟 고객, 원하는 분위기와 예산을 1:1로 분석하여 맞춤 방향을 설계합니다.',
    badge: '1:1 맞춤 진단',
  },
  {
    step: '02',
    title: '컨셉 도출 & 첫 시안',
    description: '영업일 3~5일 이내에 핵심 컨셉이 담긴 시안을 제출합니다.',
    notice: '불만족 시 100% 환불',
    badge: '영업일 3~5일',
  },
  {
    step: '03',
    title: '디테일 완성 & 확장',
    description: '선택하신 시안을 바탕으로 홈페이지, 상세페이지, 인쇄물 등 필요한 영역으로 확장합니다.',
    badge: '무제한 피드백',
  },
  {
    step: '04',
    title: '최종 납품 & 런칭 지원',
    description: '원본 AI 벡터 파일과 반응형 웹 소스, 사용 규정서까지 안전하게 전달하고 런칭까지 지원합니다.',
    badge: '원본 소스 제공',
  },
];

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white text-neutral-900 border-b border-neutral-200 scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Eyebrow: ── WORK PROCESS ── */}
        <div
          className={`flex items-center justify-center gap-3 mb-3 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-8 h-[1.5px] bg-[#7E14C8]/50" />
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-neutral-400 font-semibold">
            WORK PROCESS
          </span>
          <span className="w-8 h-[1.5px] bg-[#7E14C8]/50" />
        </div>

        {/* Headline */}
        <h2
          className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-neutral-950 tracking-tight text-center leading-tight transition-all duration-700 delay-100 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          16년차 디렉터의 <span className="text-[#7E14C8]">올인원 프로세스</span>
        </h2>

        {/* Subtitle */}
        <p
          className={`mt-3.5 text-xs sm:text-sm text-neutral-600 text-center max-w-xl mx-auto leading-relaxed font-normal transition-all duration-700 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          어려운 디자인 용어 없이, 사업자 눈높이에서 가장 정확하고 빠르게 완성합니다.
        </p>

        {/* 4 Connected Process Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
          {PROCESS_STEPS.map((stepItem, idx) => {
            const isHovered = hoveredIndex === idx;
            const delays = ['delay-150', 'delay-300', 'delay-450', 'delay-600'];

            return (
              <div
                key={stepItem.step}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-2xl p-6 sm:p-7 bg-white border transition-all duration-400 flex flex-col justify-between group cursor-pointer overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${delays[idx]} ${
                  isHovered
                    ? 'border-[#7E14C8] shadow-[0_20px_40px_-12px_rgba(126,20,200,0.22)] -translate-y-2.5 z-20'
                    : 'border-neutral-200/90 shadow-2xs hover:border-neutral-300'
                }`}
              >
                {/* Subtle Hover Ambient Top Glow */}
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br from-[#7E14C8]/15 to-transparent blur-xl transition-opacity duration-400 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Top Row: Step Number & Mini Tag */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-mono transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#7E14C8] text-white scale-105 shadow-sm'
                          : 'bg-[#f6effc] text-[#7E14C8]'
                      }`}
                    >
                      {stepItem.step}
                    </span>

                    <span
                      className={`text-[11px] font-medium tracking-tight transition-colors duration-300 ${
                        isHovered ? 'text-[#7E14C8]' : 'text-neutral-400'
                      }`}
                    >
                      {stepItem.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-5 text-base sm:text-lg font-bold leading-snug transition-colors duration-300 ${
                      isHovered ? 'text-[#7E14C8]' : 'text-neutral-900'
                    }`}
                  >
                    {stepItem.title}
                  </h3>

                  {/* Dynamic Accent Line */}
                  <div
                    className={`h-[2.5px] bg-[#7E14C8] mt-3.5 mb-3.5 rounded-full transition-all duration-300 ${
                      isHovered ? 'w-12 bg-[#7E14C8]' : 'w-6 bg-[#7E14C8]/70'
                    }`}
                  />

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                    {stepItem.description}
                  </p>

                  {/* Notice if available */}
                  {stepItem.notice && (
                    <div className="mt-2 text-neutral-400 text-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#7E14C8]" />
                      <span>{stepItem.notice}</span>
                    </div>
                  )}
                </div>

                {/* Connector Arrow for Desktop */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div
                    className={`hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white border shadow-xs absolute -right-4 top-1/2 -translate-y-1/2 z-30 transition-all duration-300 ${
                      isHovered
                        ? 'border-[#7E14C8] text-white bg-[#7E14C8] scale-110 translate-x-1 shadow-md'
                        : 'border-purple-200/90 text-[#7E14C8]'
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
