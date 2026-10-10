import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { faqs } = useStudio();
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-neutral-200 text-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            자주 묻는 질문
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto">
            상담 전 대표님들께서 가장 궁금해하시는 비용, 환불, 제작 일정 등을 솔직하게 정리했습니다.
          </p>
        </div>

        {/* FAQ Accordion List with fine hairline dividers */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-2 flex items-center justify-between gap-4 text-left hover:text-neutral-600 transition-colors cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#7E14C8] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-neutral-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 px-2 text-xs sm:text-sm text-neutral-600 leading-relaxed animate-in fade-in duration-150">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                    {faq.id === 'faq-1' && (
                      <div className="mt-3 p-3 rounded bg-[#7E14C8]/5 border border-[#7E14C8]/30 text-xs text-neutral-900 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#7E14C8] shrink-0" />
                        <span>첫 시안 확인 후 불만족 시 어떠한 위약금 없이 100% 전액 환불을 보장합니다.</span>
                      </div>
                    )}
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
