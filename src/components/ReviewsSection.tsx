import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';

// Image assets matching the reference mockup and portfolio
import lumeaImg from '../assets/images/review_lumea_coffee_1790582373648.jpg';
import gridaImg from '../assets/images/review_grida_web_1790582388998.jpg';
import bloomImg from '../assets/images/review_bloom_muse_1790582401756.jpg';
import livingImg from '../assets/images/review_living_mockup_1790582567352.jpg';
import dessertImg from '../assets/images/review_dessert_mockup_1790582595666.jpg';
import cafeImg from '../assets/images/portfolio_cafe_branding_1790579943658.jpg';
import techImg from '../assets/images/portfolio_tech_website_1790579962466.jpg';
import beautyImg from '../assets/images/portfolio_beauty_detailpage_1790579976370.jpg';
import heroDeskImg from '../assets/images/hero_branding_showcase_1790579925619.jpg';

// Avatars
import cafeAvatar from '../assets/images/avatar_cafe_founder_1790582417039.jpg';
import interiorAvatar from '../assets/images/avatar_interior_ceo_1790582431458.jpg';
import beautyAvatar from '../assets/images/avatar_beauty_ceo_1790582443580.jpg';

interface ReferenceReview {
  id: string;
  badge: string;
  date: string;
  quoteFirst: string;
  quoteHighlight: string;
  quoteLast?: string;
  description: string;
  image: string;
  avatar: string;
  author: string;
  company: string;
}

// 3 Distinct Pages of Reviews (3 cards per page, total 9 real reviews matching the 3 dots)
const REVIEW_PAGES: ReferenceReview[][] = [
  // Page 1 (Reference Image Set)
  [
    {
      id: 'rev-1',
      badge: '로고 디자인',
      date: '2026.09',
      quoteFirst: '“한 번에 마음에 드는',
      quoteHighlight: '시안을 받아서 놀랐어요.',
      quoteLast: '”',
      description: '브랜드의 분위기를 정확히 잡아주셔서 오픈 준비가 훨씬 수월했어요.',
      image: lumeaImg,
      avatar: cafeAvatar,
      author: '김○○ 대표',
      company: '카페 브랜드',
    },
    {
      id: 'rev-2',
      badge: '홈페이지 제작',
      date: '2026.09',
      quoteFirst: '“브랜드가 더 전문적으로',
      quoteHighlight: '보여졌어요.',
      quoteLast: '”',
      description: '깔끔하고 세련된 홈페이지 덕분에 문의가 눈에 띄게 늘었습니다.',
      image: gridaImg,
      avatar: interiorAvatar,
      author: '이○○ 대표',
      company: '인테리어 회사',
    },
    {
      id: 'rev-3',
      badge: '상세페이지 디자인',
      date: '2026.09',
      quoteFirst: '“매출이 ',
      quoteHighlight: '확실히 올라갔어요.',
      quoteLast: '”',
      description: '제품의 매력이 잘 전달되는 상세페이지를 만들어주셔서 전환율이 크게 개선됐습니다.',
      image: bloomImg,
      avatar: beautyAvatar,
      author: '박○○ 대표',
      company: '뷰티 브랜드',
    },
  ],
  // Page 2 (All-in-one & Brand Renewal Set)
  [
    {
      id: 'rev-4',
      badge: '올인원 패키지',
      date: '2026.08',
      quoteFirst: '“로고부터 웹까지',
      quoteHighlight: '한 번에 해결되어 3주 절약했어요.',
      quoteLast: '”',
      description: '여러 외주업체 조율할 필요 없이 일관된 톤앤매너로 제작되어 런칭이 정말 빨랐습니다.',
      image: livingImg,
      avatar: interiorAvatar,
      author: '정○○ 대표',
      company: '친환경 라이프스타일',
    },
    {
      id: 'rev-5',
      badge: '브랜드 리뉴얼',
      date: '2026.08',
      quoteFirst: '“기존 촌스러움을 벗고',
      quoteHighlight: '프리미엄 브랜드로 재탄생했어요.',
      quoteLast: '”',
      description: '16년차 디렉터님의 날카로운 시장 분석과 직송 디자인 덕분에 고객 재구매율이 급증했습니다.',
      image: dessertImg,
      avatar: cafeAvatar,
      author: '강○○ 대표',
      company: '프리미엄 디저트 카페',
    },
    {
      id: 'rev-6',
      badge: '상세페이지 디자인',
      date: '2026.08',
      quoteFirst: '“와디즈 펀딩 1,400% 달성,',
      quoteHighlight: '설득력이 압도적입니다.',
      quoteLast: '”',
      description: '단순한 그래픽 나열이 아니라 소비자의 구매 심리를 자극하는 완벽한 기획형 상세페이지였습니다.',
      image: techImg,
      avatar: beautyAvatar,
      author: '최○○ 대표',
      company: '스마트 테크 기기',
    },
  ],
  // Page 3 (Bespoke Identity & E-Commerce Set)
  [
    {
      id: 'rev-7',
      badge: '로고 디자인',
      date: '2026.07',
      quoteFirst: '“고급스러운 심볼 덕분에',
      quoteHighlight: '백화점 입점 제안을 받았습니다.',
      quoteLast: '”',
      description: '스토리가 담긴 미니멀 로고와 패키지 가이드 덕분에 바이어들의 반응이 매우 뜨거웠습니다.',
      image: cafeImg,
      avatar: cafeAvatar,
      author: '윤○○ 대표',
      company: '프리미엄 티하우스',
    },
    {
      id: 'rev-8',
      badge: '홈페이지 제작',
      date: '2026.07',
      quoteFirst: '“모바일 최적화 반응형으로',
      quoteHighlight: '상담 전환율이 2.8배 증가했어요.',
      quoteLast: '”',
      description: '불필요한 군더더기 없이 서비스의 강점이 명확하게 드러나 가망 고객 문의가 끊이지 않습니다.',
      image: heroDeskImg,
      avatar: interiorAvatar,
      author: '한○○ 대표',
      company: '전문 컨설팅 그룹',
    },
    {
      id: 'rev-9',
      badge: '상세페이지 디자인',
      date: '2026.07',
      quoteFirst: '“첫 시안 만족도 100%,',
      quoteHighlight: '수정 없이 바로 최종 완성!',
      quoteLast: '”',
      description: '사전 기획 인터뷰를 꼼꼼하게 진행해주신 덕분에 추가 수정 소모 없이 완벽하게 끝났습니다.',
      image: beautyImg,
      avatar: beautyAvatar,
      author: '서○○ 대표',
      company: '클린 비건 코스메틱',
    },
  ],
];

// Flatten all reviews for continuous flow and loop seamlessly
const ALL_REVIEWS = REVIEW_PAGES.flat();
const MARQUEE_REVIEWS = [...ALL_REVIEWS, ...ALL_REVIEWS];

export const ReviewsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="inquiries"
      className="py-20 md:py-28 bg-white border-b border-neutral-200 text-neutral-900 relative overflow-hidden scroll-mt-16"
    >
      {/* Target anchor alias for reviews navigation */}
      <span id="reviews" className="absolute -top-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header: CLIENT REVIEWS */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-neutral-400 font-semibold block mb-3">
            CLIENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-neutral-950 tracking-tight leading-tight">
            실제 고객님들의 <span className="text-[#7E14C8]">생생한 후기</span>
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            로고부터 홈페이지, 상세페이지까지<br className="hidden sm:inline" />{' '}
            브랜드의 시작을 함께한 고객님들의 이야기입니다.
          </p>
        </div>
      </div>

      {/* Continuous Slow Flowing Marquee Track (Full Width with soft gradient edges) */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right edge fades */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-20"
          aria-hidden="true"
        />

        {/* Marquee Ticker */}
        <div
          className={`animate-marquee-slow flex items-stretch gap-6 px-4 py-4 select-none ${
            isPaused ? '[animation-play-state:paused]' : ''
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {MARQUEE_REVIEWS.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[300px] sm:w-[350px] shrink-0 rounded-2xl p-6 sm:p-7 bg-white border border-neutral-200/80 shadow-2xs hover:shadow-lg hover:border-[#7E14C8]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Bar: Pill Badge & Date */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f6effc] text-[#7E14C8] text-[11px] sm:text-xs font-semibold tracking-tight">
                    {rev.badge}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-neutral-400">
                    {rev.date}
                  </span>
                </div>

                {/* Headline Quote with Purple Highlight */}
                <h3 className="mt-4 text-base sm:text-lg font-extrabold text-neutral-950 leading-snug">
                  {rev.quoteFirst}{' '}
                  <span className="text-[#7E14C8]">{rev.quoteHighlight}</span>
                  {rev.quoteLast}
                </h3>

                {/* Review Description */}
                <p className="mt-2.5 text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal min-h-[40px]">
                  {rev.description}
                </p>

                {/* Portfolio / Work Mockup Preview */}
                <div className="mt-4 rounded-xl overflow-hidden border border-neutral-150 bg-neutral-100 aspect-16/9 relative group">
                  <img
                    src={rev.image}
                    alt={rev.company}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bottom Author Row: Avatar + Name + Industry */}
              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-neutral-200 shadow-2xs"
                  loading="lazy"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                    {rev.author}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    {rev.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Controls Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-6 flex items-center justify-start text-xs text-neutral-400">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-200 hover:border-neutral-400 text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer bg-white"
        >
          {isPaused ? (
            <>
              <Play className="w-3 h-3 text-[#7E14C8] fill-[#7E14C8]" />
              <span className="text-[11px] font-medium">재생</span>
            </>
          ) : (
            <>
              <Pause className="w-3 h-3 text-[#7E14C8] fill-[#7E14C8]" />
              <span className="text-[11px] font-medium">일시정지</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
