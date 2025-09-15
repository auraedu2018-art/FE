
export interface Product {
  id: number;
  category: string;
  title: string;
  author: string;
  tags: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  studentCount: number;
  imageUrl: string;
  features: string[];
  isNew?: boolean;
  isUpdate?: boolean;
}

export interface SuccessStory {
  imageUrl: string;
  studentInfo: string;
  quote: string;
  story: string;
}

export interface ShopCategory {
  name: string;
  subcategories: string[];
}

export interface PromoPageContent {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText: string;
}

export interface ProgramShowcaseItem {
    category: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color?: 'purple' | 'pink' | 'blue' | 'green';
}

export interface HeroSlide {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
    category: string;
}

export interface Stat {
    value: string;
    label: string;
}

export type View = 'home' | 'shop' | 'promo' | 'system' | 'my-sclass';

export interface InterviewProduct {
  id: number;
  title: string;
  description: string;
  price?: number;
  type: 'purchase' | 'inquiry';
  icon: React.ElementType;
  features: string[];
}

export type InterviewApplicationStatus = 'paid' | 'submitted';
