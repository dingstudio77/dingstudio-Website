import React from 'react';
import { useStudio } from '../context/StudioContext';
import { Mail, Youtube, ArrowUp } from 'lucide-react';
import { dingLogoDark } from '../data/initialData';

export const Footer: React.FC = () => {
  const { setIsAdminOpen } = useStudio();

  return (
    <footer className="bg-white text-neutral-800 border-t border-neutral-200 pt-16 pb-24 md:pb-16 text-xs sm:text-[13px]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Main 3-Column Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 pb-12 sm:pb-14 items-center">
          {/* Column 1: Brand Logo & Slogan */}
          <div className="lg:col-span-4 lg:pr-10 space-y-4">
            <img
              src={dingLogoDark}
              alt="DING STUDIO"
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed font-normal">
              브랜드의 시작을 만드는<br />
              올인원 브랜드 디자인 스튜디오, 딩스튜디오.
            </p>
          </div>

          {/* Column 2: Contact Channels (Email & YouTube) with vertical dividers on desktop */}
          <div className="lg:col-span-4 lg:px-10 lg:border-l lg:border-r border-neutral-200 space-y-3.5">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-neutral-800 shrink-0 stroke-[1.6]" />
              <a
                href="mailto:design413_@naver.com"
                className="text-xs sm:text-[13px] text-neutral-800 hover:text-neutral-950 font-normal transition-colors"
              >
                design413_@naver.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Youtube className="w-5 h-5 text-neutral-800 shrink-0 stroke-[1.6]" />
              <a
                href="https://youtube.com/@dingwitch7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-[13px] text-neutral-800 hover:text-neutral-950 font-normal transition-colors"
              >
                youtube.com/@dingwitch7
              </a>
            </div>
          </div>

          {/* Column 3: Business Registration Details */}
          <div className="md:col-span-2 lg:col-span-4 lg:pl-10">
            <div className="space-y-2.5 text-xs sm:text-[13px]">
              <div className="flex items-center">
                <span className="w-24 sm:w-28 text-neutral-500 font-normal shrink-0">사업자명</span>
                <span className="text-neutral-800 font-normal">딩스튜디오</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 sm:w-28 text-neutral-500 font-normal shrink-0">대표자</span>
                <span className="text-neutral-800 font-normal">강은영</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 sm:w-28 text-neutral-500 font-normal shrink-0">사업자등록번호</span>
                <span className="text-neutral-800 font-normal font-mono">372-44-01102</span>
              </div>
              <div className="flex items-start">
                <span className="w-24 sm:w-28 text-neutral-500 font-normal shrink-0">사업장 주소</span>
                <span className="text-neutral-800 font-normal">경기도 성남시 분당구 수내로 201</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row with Full-Width Horizontal Rule */}
        <div className="pt-6 border-t border-neutral-200 flex items-center justify-between text-xs sm:text-[13px] text-neutral-500 font-normal">
          <div>
            <span
              onClick={() => setIsAdminOpen(true)}
              className="cursor-pointer hover:text-neutral-800 transition-colors"
              title="관리자 모달 열기"
            >
              © 2026 딩스튜디오.
            </span>{' '}
            All rights reserved.
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
          >
            <span>맨 위로</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
