import React from 'react';
import { useStudio } from '../context/StudioContext';

export const MetricsSection: React.FC = () => {
  const { metrics } = useStudio();

  return (
    <section id="metrics" className="py-12 md:py-16 bg-white border-b border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* 4 Tabular Metric Columns with Clean Division */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/90 bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 shadow-2xs">
          {metrics.map((item, index) => (
            <div
              key={item.id}
              className={`py-4 sm:py-2 flex flex-col justify-start ${
                index === 0
                  ? 'pr-4 sm:pr-6'
                  : 'sm:px-6'
              }`}
            >
              {/* Big Purple Number */}
              <div className="flex items-baseline text-4xl lg:text-[44px] font-extrabold text-[#7E14C8] tracking-tight leading-none">
                <span>{item.number}</span>
                <span className="text-2xl lg:text-3xl font-bold ml-0.5">{item.suffix}</span>
              </div>

              {/* Metric Label */}
              <h3 className="mt-3.5 text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                {item.label}
              </h3>

              {/* Purple Accent Rule */}
              <div className="w-6 h-[2px] bg-[#7E14C8] mt-3.5 mb-3.5 rounded-full" />

              {/* Sublabel */}
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

