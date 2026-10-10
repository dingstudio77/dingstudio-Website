export type ServiceCategory = 'ALL' | 'LOGO' | 'WEBSITE' | 'DETAIL PAGE' | 'BRAND';

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'LOGO' | 'WEBSITE' | 'DETAIL PAGE' | 'BRAND';
  categoryLabel: string;
  summary: string;
  description: string;
  image: string;
  deliverables: string[];
  duration: string;
  tags: string[];
  featured?: boolean;
}

export interface RealtimeInquiry {
  id: string;
  type: string;
  message: string;
  timeAgo: string;
  timestamp: string;
  isNew?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  company: string;
  industry: string;
  before: string;
  work: string;
  after: string;
  rating: number;
  highlight: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export interface MetricItem {
  id: string;
  number: string;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface PackagePlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  priceNote: string;
  originalPrice?: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  recommendedFor: string;
  number?: string;
  label?: string;
  subTitle?: string;
}

export interface ConsultationFormData {
  name: string;
  brandName: string;
  phone: string;
  email: string;
  services: string[];
  budget: string;
  schedule: string;
  message: string;
}
