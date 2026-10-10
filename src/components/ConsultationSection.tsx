import React, { useState, useEffect } from 'react';
import { useStudio } from '../context/StudioContext';
import { ConsultationFormData } from '../types';
import { Check, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

export const ConsultationSection: React.FC = () => {
  const {
    selectedServicePreset,
    submitConsultation,
  } = useStudio();

  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    brandName: '',
    phone: '',
    email: '',
    services: ['로고디자인'],
    budget: '',
    schedule: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (selectedServicePreset) {
      if (selectedServicePreset.includes('로고')) {
        setFormData(prev => ({
          ...prev,
          services: Array.from(new Set([...prev.services, '로고디자인'])),
          message: prev.message ? prev.message : `${selectedServicePreset} 관련 문의드립니다.`
        }));
      } else if (selectedServicePreset.includes('홈페이지') || selectedServicePreset.includes('웹')) {
        setFormData(prev => ({
          ...prev,
          services: Array.from(new Set([...prev.services, '홈페이지'])),
          message: prev.message ? prev.message : `${selectedServicePreset} 관련 문의드립니다.`
        }));
      } else if (selectedServicePreset.includes('상세페이지')) {
        setFormData(prev => ({
          ...prev,
          services: Array.from(new Set([...prev.services, '상세페이지'])),
          message: prev.message ? prev.message : `${selectedServicePreset} 관련 문의드립니다.`
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          services: Array.from(new Set([...prev.services, '로고디자인'])),
          message: prev.message ? prev.message : `${selectedServicePreset} 관련 상담을 희망합니다.`
        }));
      }
    }
  }, [selectedServicePreset]);

  const availableServices = [
    '로고디자인',
    '홈페이지',
    '상세페이지'
  ];

  const budgetOptions = [
    '선택해주세요',
    '50만원 이하 (단품 로고/기본)',
    '50~150만원 (로고 + 상세페이지 or 웹)',
    '150~300만원 (올인원 추천)',
    '300만원 이상 (풀 브랜딩 & 커스텀)',
    '아직 예산 미정 (상담 후 결정)'
  ];

  const scheduleOptions = [
    '선택해주세요',
    '긴급 (1~2주 이내 필요)',
    '1개월 이내 오픈 예정',
    '2~3개월 이내',
    '일정 여유 있음 (준비 단계)'
  ];

  const handleServiceToggle = (svc: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(svc);
      if (exists) {
        return { ...prev, services: prev.services.filter(s => s !== svc) };
      } else {
        return { ...prev, services: [...prev.services, svc] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('성함과 연락처를 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const res = submitConsultation(formData);
      setSubmitResult(res);
      setIsSubmitting(false);
      setFormData({
        name: '',
        brandName: '',
        phone: '',
        email: '',
        services: ['로고디자인'],
        budget: '150~300만원 (올인원 추천)',
        schedule: '1개월 이내',
        message: ''
      });
    }, 500);
  };

  return (
    <section id="consultation" className="py-20 md:py-28 bg-white text-neutral-900 relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* 설문지 (CONSULTATION FORM) */}
        <div id="consultation-form" className="rounded-3xl bg-white border border-neutral-200/90 p-7 sm:p-12 lg:p-14 shadow-sm max-w-4xl mx-auto relative">
          <div className="w-full">
            
            {/* Header: START YOUR PROJECT */}
            <div className="text-center mb-10 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-[1.5px] bg-[#7E14C8]/50" />
                <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[#7E14C8] font-bold">
                  START YOUR PROJECT
                </span>
                <span className="w-8 h-[1.5px] bg-[#7E14C8]/50" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-neutral-950 tracking-tight leading-tight">
                브랜드 이야기를 <span className="text-[#7E14C8]">들려주세요.</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                로고 하나부터 브랜드 전체까지, 지금 필요한 디자인을 함께 찾아드립니다.
              </p>
            </div>

            {/* Submission Notification Dialog */}
            {submitResult && (
              <div className="mb-8 p-5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3 animate-in fade-in duration-150">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-bold text-sm">
                    상담 신청이 정상적으로 완료되었습니다!
                  </div>
                  <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                    {submitResult.message}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitResult(null)}
                      className="text-xs font-bold text-emerald-800 hover:underline cursor-pointer"
                    >
                      확인 완료
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              {/* Row 1: Name & Brand Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2">
                    대표자 성함 *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200/90 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm focus:border-[#7E14C8] focus:ring-2 focus:ring-[#7E14C8]/10 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2">
                    브랜드명 / 회사명 (예정 가능)
                  </label>
                  <input
                    type="text"
                    placeholder="예: 딩스 베이커리 (미정이면 공란 가능)"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200/90 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm focus:border-[#7E14C8] focus:ring-2 focus:ring-[#7E14C8]/10 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200/90 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm focus:border-[#7E14C8] focus:ring-2 focus:ring-[#7E14C8]/10 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2">
                    이메일 주소
                  </label>
                  <input
                    type="email"
                    placeholder="contact@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200/90 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm focus:border-[#7E14C8] focus:ring-2 focus:ring-[#7E14C8]/10 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Required Services (6 items in responsive grid) */}
              <div>
                <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2.5">
                  필요한 서비스 (복수 선택 가능) *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {availableServices.map((svc) => {
                    const isChecked = formData.services.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => handleServiceToggle(svc)}
                        className={`px-3 py-3 rounded-xl border flex items-center justify-start gap-2.5 text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
                          isChecked
                            ? 'border-[#7E14C8] bg-[#fbf7fe] text-neutral-900 shadow-2xs font-semibold'
                            : 'border-neutral-200/90 bg-white text-neutral-700 hover:border-neutral-300'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-[4px] flex items-center justify-center transition-colors shrink-0 ${
                            isChecked ? 'bg-[#7E14C8] text-white' : 'border border-neutral-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">{svc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: Budget & Schedule */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2">
                    예상 예산 범위
                  </label>
                  <div className="relative">
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200/90 bg-white text-neutral-900 text-sm appearance-none focus:border-[#7E14C8] focus:ring-2 focus:ring-[#7E14C8]/10 transition-all outline-none cursor-pointer pr-10"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt === '선택해주세요' ? '' : opt} className="text-neutral-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2">
                    희망 완료 일정
                  </label>
                  <div className="relative">
                    <select
                      value={formData.schedule}
                      onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200/90 bg-white text-neutral-900 text-sm appearance-none focus:border-[#7E14C8] focus:ring-2 focus:ring-[#7E14C8]/10 transition-all outline-none cursor-pointer pr-10"
                    >
                      {scheduleOptions.map((opt) => (
                        <option key={opt} value={opt === '선택해주세요' ? '' : opt} className="text-neutral-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 5: Message Details */}
              <div>
                <label className="block text-xs sm:text-[13px] font-bold text-neutral-900 mb-2">
                  문의 내용 및 브랜드 설명
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    maxLength={500}
                    placeholder="사업 아이템이나 생각 중이신 레퍼런스, 고민하고 계신 점을 자유롭게 적어주세요."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 pb-8 rounded-xl border border-neutral-200/90 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm focus:border-[#7E14C8] focus:ring-2 focus:ring-[#7E14C8]/10 transition-all outline-none resize-none min-h-[120px]"
                  />
                  <div className="absolute right-3.5 bottom-3 text-[11px] font-mono text-neutral-400">
                    {formData.message.length}/500
                  </div>
                </div>
              </div>

              {/* Row 6: Full-width Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#7E14C8] hover:bg-[#6b10aa] text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>접수 처리 중...</span>
                  ) : (
                    <>
                      <span>상담 신청하기</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
