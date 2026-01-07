
export enum PortfolioCategory {
  ARRANGEMENT = 'Music Arrangement',
  MIXING = 'Vocal Mixing'
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  thumbnail: string;
  videoUrl: string;
  label?: string; // Optional override for the category tag
}

export interface PriceTier {
  title: string;
  price: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  tiers: PriceTier[];
}