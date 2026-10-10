import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PortfolioItem,
  RealtimeInquiry,
  ReviewItem,
  FaqItem,
  MetricItem,
  PackagePlan,
  ConsultationFormData,
} from '../types';
import {
  INITIAL_METRICS,
  INITIAL_PORTFOLIO,
  INITIAL_INQUIRIES,
  INITIAL_REVIEWS,
  INITIAL_FAQS,
  INITIAL_PACKAGES,
  REFUND_POLICY_TERMS,
} from '../data/initialData';

interface StudioContextType {
  metrics: MetricItem[];
  setMetrics: React.Dispatch<React.SetStateAction<MetricItem[]>>;
  portfolio: PortfolioItem[];
  setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
  inquiries: RealtimeInquiry[];
  reviews: ReviewItem[];
  setReviews: React.Dispatch<React.SetStateAction<ReviewItem[]>>;
  faqs: FaqItem[];
  packages: PackagePlan[];
  setPackages: React.Dispatch<React.SetStateAction<PackagePlan[]>>;
  refundTerms: typeof REFUND_POLICY_TERMS;
  setRefundTerms: React.Dispatch<React.SetStateAction<typeof REFUND_POLICY_TERMS>>;
  
  // Interaction & Form state
  selectedServicePreset: string | null;
  setSelectedServicePreset: (svc: string | null) => void;
  submitConsultation: (data: ConsultationFormData) => { success: boolean; message: string };
  submittedInquiries: ConsultationFormData[];
  
  // UI modals
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  activePortfolioModal: PortfolioItem | null;
  setActivePortfolioModal: (item: PortfolioItem | null) => void;
  
  // Quick inquiry trigger
  scrollToConsultation: (servicePreset?: string) => void;
  scrollToSection: (sectionId: string) => void;
  resetToDefaults: () => void;
}

const StudioContext = createContext<StudioContextType | undefined>(undefined);

const STORAGE_KEYS = {
  METRICS: 'ding_studio_metrics_v1',
  REVIEWS: 'ding_studio_reviews_v1',
  PACKAGES: 'ding_studio_packages_v2',
  REFUND: 'ding_studio_refund_v1',
  INQUIRIES: 'ding_studio_inquiries_v1',
  SUBMISSIONS: 'ding_studio_client_submissions_v1',
};

export const StudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<MetricItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.METRICS);
    return saved ? JSON.parse(saved) : INITIAL_METRICS;
  });

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);

  const [inquiries, setInquiries] = useState<RealtimeInquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
    return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
  });

  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [faqs] = useState<FaqItem[]>(INITIAL_FAQS);

  const [packages, setPackages] = useState<PackagePlan[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PACKAGES);
    return saved ? JSON.parse(saved) : INITIAL_PACKAGES;
  });

  const [refundTerms, setRefundTerms] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.REFUND);
    return saved ? JSON.parse(saved) : REFUND_POLICY_TERMS;
  });

  const [submittedInquiries, setSubmittedInquiries] = useState<ConsultationFormData[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SUBMISSIONS);
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedServicePreset, setSelectedServicePreset] = useState<string | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activePortfolioModal, setActivePortfolioModal] = useState<PortfolioItem | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.METRICS, JSON.stringify(metrics));
  }, [metrics]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(packages));
  }, [packages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REFUND, JSON.stringify(refundTerms));
  }, [refundTerms]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SUBMISSIONS, JSON.stringify(submittedInquiries));
  }, [submittedInquiries]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToConsultation = (servicePreset?: string) => {
    if (servicePreset) {
      setSelectedServicePreset(servicePreset);
    }
    scrollToSection('consultation');
  };

  const submitConsultation = (data: ConsultationFormData) => {
    // Save to submissions
    setSubmittedInquiries(prev => [data, ...prev]);

    // Mask name for privacy: "김*현 고객님" or clean title
    const maskedName = data.name.length > 2 
      ? `${data.name[0]}*${data.name.slice(-1)}`
      : `${data.name[0]}*`;

    const serviceDisplay = data.services.length > 0 
      ? data.services.join(' · ') 
      : '브랜딩 전반 상담';

    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // Add to real-time inquiries feed at the top
    const newInquiry: RealtimeInquiry = {
      id: `inq-live-${Date.now()}`,
      type: `${data.brandName || maskedName}님의 문의`,
      message: `${serviceDisplay} 상담 및 견적 문의가 신규 접수되었습니다.`,
      timeAgo: '방금 전',
      timestamp: timeStr,
      isNew: true
    };

    setInquiries(prev => [newInquiry, ...prev]);

    return {
      success: true,
      message: '상담 신청이 성공적으로 접수되었습니다. 24시간 이내에 16년차 대표 디자이너가 직접 연락드립니다.'
    };
  };

  const resetToDefaults = () => {
    localStorage.clear();
    setMetrics(INITIAL_METRICS);
    setPortfolio(INITIAL_PORTFOLIO);
    setInquiries(INITIAL_INQUIRIES);
    setReviews(INITIAL_REVIEWS);
    setPackages(INITIAL_PACKAGES);
    setRefundTerms(REFUND_POLICY_TERMS);
    setSubmittedInquiries([]);
  };

  return (
    <StudioContext.Provider
      value={{
        metrics,
        setMetrics,
        portfolio,
        setPortfolio,
        inquiries,
        reviews,
        setReviews,
        faqs,
        packages,
        setPackages,
        refundTerms,
        setRefundTerms,
        selectedServicePreset,
        setSelectedServicePreset,
        submitConsultation,
        submittedInquiries,
        isAdminOpen,
        setIsAdminOpen,
        activePortfolioModal,
        setActivePortfolioModal,
        scrollToConsultation,
        scrollToSection,
        resetToDefaults,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
};

export const useStudio = () => {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used within a StudioProvider');
  }
  return context;
};
