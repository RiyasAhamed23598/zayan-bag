export interface Product {
  id: string;
  nameKey: string;
  descriptionKey: string;
  image: string;
  category: string;
  badge?: string;
}

export interface ProductCategory {
  id: string;
  nameKey: string;
  descriptionKey: string;
  image: string;
  icon: string;
}

export interface RepairService {
  id: string;
  nameKey: string;
  descriptionKey: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  reviewKey: string;
  location: string;
}

export interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface BeforeAfter {
  id: string;
  titleKey: string;
  before: string;
  after: string;
  descriptionKey: string;
}
