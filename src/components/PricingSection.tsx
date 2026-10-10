import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { packages, refundTerms, scrollToConsultation } = useStudio();
  const [selectedPlanId, setSelectedPlanId] = useState<string>('pkg-allinone');

  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-[#7E14C8] text-neutral-900 scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Eyebrow: ── PRICE & PACKAGES ── */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-8 h-[1.5px] bg-white/40" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-white uppercase font-mono">
            PRICE & PACKAGES
          </span>
          <span className="w-8 h-[1.5px] bg-white/40" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-white tracking-tight text-center leading-tight">
          합리적인 가격, <span className="text-[#f3e8ff]">확실한 결과</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 text-xs sm:text-sm md:text-base text-purple-100 text-center max-w-xl mx-auto leading-relaxed font-normal">
          불필요한 비용은 줄이고, 브랜드에 꼭 필요한 디자인만 담았습니다.<br className="hidden sm:inline" />
          기존 업체 대비 약 50% 수준으로, 더 많은 분들이 좋은 디자인을 경험할 수 있습니다.
        </p>

        {/* 3 Pricing Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mt-12 sm:mt-14">
          {packages.map((pkg, idx) => {
            const isSelected = selectedPlanId === pkg.id;
            const isHighlight = pkg.isPopular || pkg.badge !== undefined;
            const numStr = pkg.number || `0${idx + 1}`;
            const labelStr = pkg.label || (pkg.id === 'pkg-logo' ? 'LOGO DESIGN' : pkg.id === 'pkg-allinone' ? 'BRANDING PACKAGE' : 'HOMEPAGE PACKAGE');

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-white ${
                  isHighlight
                    ? 'border-2 border-white shadow-[0_16px_40px_rgba(0,0,0,0.25)] md:-translate-y-2'
                    : 'border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Top Badge for Featured Plan */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7E14C8] text-white text-[11px] font-bold tracking-wide whitespace-nowrap shadow-md">
                    {pkg.badge || '가장 많이 선택하는 패키지'}
                  </div>
                )}

                <div>
                  {/* Top Number & Category Label with subtle divider */}
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-7 rounded-full bg-[#f6effc] text-[#7E14C8] text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      {numStr}
                    </div>
                    <div className="flex-1 h-[1px] bg-purple-100 mx-3" />
                    <span className="text-[11px] font-medium tracking-wider text-purple-400 font-mono uppercase shrink-0">
                      {labelStr}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mt-6">
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 leading-snug">
                      {pkg.name}
                    </h3>
                    {pkg.subTitle && (
                      <div className="text-sm sm:text-base font-bold text-neutral-800 mt-0.5">
                        {pkg.subTitle}
                      </div>
                    )}
                  </div>

                  {/* Subtitle / Tagline */}
                  <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal whitespace-pre-line">
                    {pkg.tagline}
                  </p>

                  {/* Price in Bold Purple */}
                  <div className="mt-6 text-2xl sm:text-3xl font-black text-[#7E14C8] tracking-tight">
                    {pkg.price}
                  </div>

                  {/* Subtle horizontal divider */}
                  <div className="w-full h-[1px] bg-neutral-100 my-6" />

                  {/* Features list with soft purple rounded check boxes */}
                  <div className="space-y-3">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-md bg-[#f6effc] text-[#7E14C8] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-[13px] text-neutral-700 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-8 pt-2">
                  <button
                    onClick={() => {
                      setSelectedPlanId(pkg.id);
                      scrollToConsultation(`${pkg.name} 플랜을 기준으로 상담을 희망합니다.`);
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer ${
                      isHighlight
                        ? 'bg-[#7E14C8] hover:bg-[#680fb0] text-white shadow-sm active:scale-98'
                        : 'border border-neutral-900 bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white shadow-2xs active:scale-98'
                    }`}
                  >
                    <span>{isSelected ? '선택 완료 (설문지 이동)' : '자세히 보기'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Refund Guarantee Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-white/80 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="p-2.5 rounded-xl bg-[#7E14C8]/10 text-[#7E14C8] shrink-0 hidden sm:block">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-neutral-900">
                {refundTerms.headline}
              </div>
              <div className="text-xs text-neutral-600 mt-0.5 max-w-2xl">
                {refundTerms.terms[0]}
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f6effc] border border-purple-200 text-xs font-mono text-[#7E14C8] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#7E14C8]" />
              <span>100% 전액 환불 안심 보장제</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
