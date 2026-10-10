import React, { useState } from 'react';
import { useStudio } from '../context/StudioContext';
import { X, Save, RotateCcw, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { ReviewItem } from '../types';
import { dingLogoDark } from '../data/initialData';

export const AdminModal: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    metrics,
    setMetrics,
    packages,
    setPackages,
    refundTerms,
    setRefundTerms,
    reviews,
    setReviews,
    submittedInquiries,
    resetToDefaults
  } = useStudio();

  const [activeTab, setActiveTab] = useState<'METRICS' | 'PACKAGES' | 'REFUND' | 'REVIEWS' | 'INQUIRIES'>('METRICS');
  const [saveToast, setSaveToast] = useState(false);

  // New review form draft
  const [newReview, setNewReview] = useState<Partial<ReviewItem>>({
    author: '',
    company: '',
    industry: '',
    before: '',
    work: '',
    after: '',
    highlight: '',
    date: new Date().toISOString().slice(0, 10),
    rating: 5
  });

  if (!isAdminOpen) return null;

  const handleSave = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.company || !newReview.after) {
      alert('작성자, 회사명, 완료 결과를 입력해주세요.');
      return;
    }

    const reviewToAdd: ReviewItem = {
      id: `rev-custom-${Date.now()}`,
      author: newReview.author || '고객 대표',
      company: newReview.company || '신규 브랜드',
      industry: newReview.industry || '일반 사업',
      before: newReview.before || '브랜딩 준비 과정의 고민',
      work: newReview.work || '딩스튜디오 올인원 진행',
      after: newReview.after || '만족스러운 비즈니스 성과',
      highlight: newReview.highlight || `“${newReview.after}”`,
      date: newReview.date || new Date().toISOString().slice(0, 10),
      rating: 5
    };

    setReviews(prev => [reviewToAdd, ...prev]);
    setNewReview({
      author: '',
      company: '',
      industry: '',
      before: '',
      work: '',
      after: '',
      highlight: '',
      date: new Date().toISOString().slice(0, 10),
      rating: 5
    });
    handleSave();
  };

  const handleDeleteReview = (id: string) => {
    if (confirm('이 후기를 삭제하시겠습니까?')) {
      setReviews(prev => prev.filter(r => r.id !== id));
      handleSave();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 text-neutral-900">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-neutral-300 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-[#faf9f6]">
          <div className="flex items-center gap-3">
            <img src={dingLogoDark} alt="DING STUDIO" className="h-6 w-auto object-contain" />
            <div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                ADMIN CONTROL PANEL
              </span>
              <h3 className="text-base font-bold text-neutral-900">
                DING STUDIO 데이터 & 운영 정책 관리자 (CMS)
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded transition-colors shadow-xs cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>저장 완료</span>
            </button>
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-neutral-200 bg-neutral-50 flex items-center gap-2 overflow-x-auto text-xs">
          {[
            { id: 'METRICS', label: '1. 수치 데이터' },
            { id: 'PACKAGES', label: '2. 패키지 & 가격' },
            { id: 'REFUND', label: '3. 100% 환불 정책' },
            { id: 'REVIEWS', label: '4. 고객 후기 관리' },
            { id: 'INQUIRIES', label: `5. 접수된 상담 내역 (${submittedInquiries.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-3 font-semibold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-neutral-900 text-neutral-900'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm">
          {saveToast && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>변경 사항이 브라우저 스토리지에 성공적으로 저장되었습니다.</span>
            </div>
          )}

          {/* TAB 1: METRICS */}
          {activeTab === 'METRICS' && (
            <div className="space-y-4">
              <div className="text-xs text-neutral-600 leading-relaxed">
                ‘수치로 증명합니다’ 섹션에 표시될 실질적인 스튜디오 통계를 입력하세요.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {metrics.map((m, idx) => (
                  <div key={m.id} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-2">
                    <div className="text-xs font-bold text-neutral-900">{m.label}</div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={m.number}
                        onChange={(e) => {
                          const updated = [...metrics];
                          updated[idx].number = e.target.value;
                          setMetrics(updated);
                        }}
                        className="flex-1 px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded text-neutral-900"
                        placeholder="숫자 (예: 180)"
                      />
                      <input
                        type="text"
                        value={m.suffix}
                        onChange={(e) => {
                          const updated = [...metrics];
                          updated[idx].suffix = e.target.value;
                          setMetrics(updated);
                        }}
                        className="w-16 px-2 py-1.5 text-xs bg-white border border-neutral-300 rounded text-neutral-900 text-center"
                        placeholder="단위 (+, %)"
                      />
                    </div>
                    <input
                      type="text"
                      value={m.sublabel}
                      onChange={(e) => {
                        const updated = [...metrics];
                        updated[idx].sublabel = e.target.value;
                        setMetrics(updated);
                      }}
                      className="w-full px-3 py-1 text-[11px] bg-white border border-neutral-300 rounded text-neutral-600"
                      placeholder="설명 문구"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PACKAGES */}
          {activeTab === 'PACKAGES' && (
            <div className="space-y-5">
              <div className="text-xs text-neutral-600">
                서비스별 패키지 가격과 할인 메모를 수정할 수 있습니다.
              </div>
              {packages.map((pkg, pIdx) => (
                <div key={pkg.id} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">{pkg.name}</span>
                    <span className="text-xs text-neutral-500 font-mono">{pkg.badge || '기본 플랜'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-neutral-500 mb-1">현재 표시 가격</label>
                      <input
                        type="text"
                        value={pkg.price}
                        onChange={(e) => {
                          const updated = [...packages];
                          updated[pIdx].price = e.target.value;
                          setPackages(updated);
                        }}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded text-neutral-900 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-neutral-500 mb-1">기존 정가 (할인 전)</label>
                      <input
                        type="text"
                        value={pkg.originalPrice || ''}
                        onChange={(e) => {
                          const updated = [...packages];
                          updated[pIdx].originalPrice = e.target.value;
                          setPackages(updated);
                        }}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded text-neutral-900 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-neutral-500 mb-1">가격 비교 메모</label>
                      <input
                        type="text"
                        value={pkg.priceNote}
                        onChange={(e) => {
                          const updated = [...packages];
                          updated[pIdx].priceNote = e.target.value;
                          setPackages(updated);
                        }}
                        className="w-full px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded text-neutral-700"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: REFUND POLICY */}
          {activeTab === 'REFUND' && (
            <div className="space-y-4">
              <div className="text-xs text-neutral-600">
                핵심 차별점인 ‘첫 시안 100% 환불 정책’ 문구와 상세 세부 조건을 편집할 수 있습니다.
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">메인 카피</label>
                <input
                  type="text"
                  value={refundTerms.headline}
                  onChange={(e) => setRefundTerms({ ...refundTerms, headline: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded text-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">서브 카피</label>
                <input
                  type="text"
                  value={refundTerms.subheadline}
                  onChange={(e) => setRefundTerms({ ...refundTerms, subheadline: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded text-neutral-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-neutral-800">구체적 환불 조건 (3개 조항)</label>
                {refundTerms.terms.map((t, idx) => (
                  <textarea
                    key={idx}
                    rows={2}
                    value={t}
                    onChange={(e) => {
                      const updated = [...refundTerms.terms];
                      updated[idx] = e.target.value;
                      setRefundTerms({ ...refundTerms, terms: updated });
                    }}
                    className="w-full p-2.5 text-xs bg-neutral-50 border border-neutral-300 rounded text-neutral-800 leading-relaxed"
                  />
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: REVIEWS */}
          {activeTab === 'REVIEWS' && (
            <div className="space-y-6">
              <div className="text-xs text-neutral-600">
                실제 고객의 BEFORE(고민) → WORK(스튜디오 작업) → AFTER(성과) 3단계 구조 후기를 등록 및 관리합니다.
              </div>

              <form onSubmit={handleAddReview} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-3">
                <div className="text-xs font-bold text-neutral-900">
                  신규 후기 등록
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="작성자 (예: 이*정 대표)"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded text-neutral-900"
                  />
                  <input
                    type="text"
                    required
                    placeholder="회사/브랜드명 (예: 모던베이커리)"
                    value={newReview.company}
                    onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                    className="px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded text-neutral-900"
                  />
                  <input
                    type="text"
                    placeholder="업종 (예: F&B 1인 창업)"
                    value={newReview.industry}
                    onChange={(e) => setNewReview({ ...newReview, industry: e.target.value })}
                    className="px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded text-neutral-900"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="[BEFORE] 고객이 의뢰 전 가지고 있던 고민"
                  value={newReview.before}
                  onChange={(e) => setNewReview({ ...newReview, before: e.target.value })}
                  className="w-full p-2 text-xs bg-white border border-neutral-300 rounded text-neutral-900"
                />

                <textarea
                  rows={2}
                  placeholder="[WORK] 딩스튜디오가 실제로 진행한 작업"
                  value={newReview.work}
                  onChange={(e) => setNewReview({ ...newReview, work: e.target.value })}
                  className="w-full p-2 text-xs bg-white border border-neutral-300 rounded text-neutral-900"
                />

                <textarea
                  rows={2}
                  required
                  placeholder="[AFTER] 완성된 결과물과 고객의 반응 & 성과"
                  value={newReview.after}
                  onChange={(e) => setNewReview({ ...newReview, after: e.target.value })}
                  className="w-full p-2 text-xs bg-white border border-neutral-300 rounded text-neutral-900"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>후기 추가하기</span>
                  </button>
                </div>
              </form>

              {/* Review List */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-neutral-700">현재 등록된 후기 ({reviews.length}개)</div>
                {reviews.map((r) => (
                  <div key={r.id} className="p-3.5 rounded bg-neutral-50 border border-neutral-200 flex items-start justify-between gap-4">
                    <div className="space-y-1 text-xs">
                      <div className="font-bold text-neutral-900">
                        {r.author} · {r.company} ({r.industry})
                      </div>
                      <div className="text-neutral-600 italic line-clamp-1">
                        {r.highlight}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteReview(r.id)}
                      className="p-1.5 text-neutral-400 hover:text-rose-600 rounded transition-colors"
                      title="후기 삭제"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INQUIRIES */}
          {activeTab === 'INQUIRIES' && (
            <div className="space-y-4">
              <div className="text-xs text-neutral-600">
                방문자가 홈페이지 상담 폼을 통해 접수한 실시간 문의 목록입니다.
              </div>

              {submittedInquiries.length === 0 ? (
                <div className="p-8 text-center text-xs text-neutral-400 bg-neutral-50 rounded border border-neutral-200">
                  아직 접수된 신규 문의가 없습니다. 웹사이트 하단의 상담 신청 폼을 통해 테스트해보실 수 있습니다.
                </div>
              ) : (
                <div className="space-y-3">
                  {submittedInquiries.map((inq, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-neutral-900 text-sm">
                          {inq.name} 대표님 {inq.brandName ? `(${inq.brandName})` : ''}
                        </span>
                        <span className="font-mono text-neutral-800 font-bold">
                          {inq.phone}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-500 flex flex-wrap gap-2">
                        <span>이메일: {inq.email || '미입력'}</span>
                        <span>·</span>
                        <span>예산: {inq.budget}</span>
                        <span>·</span>
                        <span>일정: {inq.schedule}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {inq.services.map((s, sIdx) => (
                          <span key={sIdx} className="px-2 py-0.5 rounded text-[11px] bg-white border border-neutral-300 text-neutral-800">
                            {s}
                          </span>
                        ))}
                      </div>
                      {inq.message && (
                        <div className="p-2.5 rounded bg-white text-xs text-neutral-700 mt-2 border border-neutral-200">
                          “{inq.message}”
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 bg-[#faf9f6] flex items-center justify-between text-xs">
          <button
            onClick={() => {
              if (confirm('기본 데이터로 초기화하시겠습니까?')) {
                resetToDefaults();
                alert('기본값으로 복원되었습니다.');
              }
            }}
            className="inline-flex items-center gap-1 text-neutral-500 hover:text-rose-600 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>기본 데이터로 복원</span>
          </button>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="px-4 py-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
