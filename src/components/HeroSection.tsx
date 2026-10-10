import React from 'react';
import { useStudio } from '../context/StudioContext';
import { dingHeroDesk } from '../data/initialData';
import { ArrowRight, Gem, Users, MessageSquareQuote, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { scrollToConsultation, scrollToSection } = useStudio();

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white text-neutral-900 border-b border-neutral-200">
      
      {/* 
        Hero Stage with Photorealistic Studio Desk Background
        Inspired by the luxury editorial reference image (Sunlit travertine marble, open laptop, branding stationery)
      */}
      <div className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[760px] flex items-center pt-28 sm:pt-36 lg:pt-32 pb-16 lg:pb-20">
        
        {/* Full-bleed Studio Desk Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={dingHeroDesk}
            alt="DING STUDIO 브랜드 디자인 스튜디오"
            className="w-full h-full object-cover object-[80%_center] lg:object-right"
            referrerPolicy="no-referrer"
          />

          {/* Gentle Clean White Scrim to ensure crisp typography on the left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent lg:from-white/85 lg:via-white/30 lg:to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20 pointer-events-none" />
        </div>

        {/* Content Container (Aligned with Reference Composition) */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-7">
            
            {/* Kicker with thin horizontal rule */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[1.5px] bg-[#7E14C8]"></span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#7E14C8]">
                MAKE IT A BRAND. NOT JUST A DESIGN.
              </span>
            </div>

            {/* Main Headline (2-tone styling matching reference) */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.65rem] font-black tracking-tight text-neutral-900 leading-[1.22] sm:leading-[1.18]">
                아이디어만 있다구요? <br />
                괜찮습니다! <br />
                <span className="text-[#7E14C8]">
                  기획부터 제작까지 <br />
                  다 해드릴게요
                </span>
              </h1>
              <div className="mt-3.5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800 tracking-tight">
                <span className="w-5 h-[1.5px] bg-[#7E14C8]"></span>
                <span>16년차 대기업 경력, 딩스튜디오 대표 강은영</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollToConsultation()}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#7E14C8] hover:bg-[#680fb2] rounded shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>브랜드 상담받기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-neutral-850 hover:text-black bg-white/80 hover:bg-white border border-neutral-350 hover:border-neutral-500 rounded backdrop-blur-xs shadow-2xs transition-all active:scale-95 cursor-pointer"
              >
                <span>포트폴리오 보기</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
              </button>
            </div>

            {/* 
              Bottom Trust Row: 3 pillars with delicate vertical hairline dividers
              (16년차 전문가 | 400명+ 고객의 선택 | 첫 시안 불만족 시 100% 전액 환불)
            */}
            <div className="pt-6 sm:pt-8 border-t border-neutral-300/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-300/80">
                
                {/* 1. 16년차 브랜드 디자인 전문가 */}
                <div className="flex items-center gap-3 sm:pr-4">
                  <div className="p-2 rounded bg-[#7E14C8]/10 text-[#7E14C8] shrink-0">
                    <Gem className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900">
                      16년차 대기업 경력
                    </div>
                    <div className="text-[11px] text-neutral-600">
                      브랜드 디자인 전문가 직송
                    </div>
                  </div>
                </div>

                {/* 2. 400명 이상 고객의 선택 / 180+ 프로젝트 */}
                <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
                  <div className="p-2 rounded bg-[#7E14C8]/10 text-[#7E14C8] shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900">
                      400명 이상 고객의 선택
                    </div>
                    <div className="text-[11px] text-neutral-600">
                      누적 180+ 프로젝트 완료
                    </div>
                  </div>
                </div>

                {/* 3. 첫 시안 불만족 시 100% 전액 환불 */}
                <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4">
                  <div className="p-2 rounded bg-[#7E14C8]/10 text-[#7E14C8] shrink-0">
                    <MessageSquareQuote className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900">
                      첫 시안 불만족 시
                    </div>
                    <div className="text-[11px] text-[#7E14C8] font-bold">
                      100% 전액 환불 보장
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
