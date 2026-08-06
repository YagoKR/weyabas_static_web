import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '3v8sx1or',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

export interface Deal {
    name: string;
    emoji: string;
    price: number;
    originalPrice: number;
    discount: number;
    affiliateUrl: string;
}

export function formatDeal(raw: any): Deal {
    const discount = Math.round(
        ((raw.originalPrice - raw.price) / raw.originalPrice) * 100
    );

    return {
        name: raw.name,
        emoji: raw.emoji,
        price: raw.price,
        originalPrice: raw.originalPrice,
        discount,
        affiliateUrl: raw.affiliateUrl,
    };
}

export interface TrendingItem {
    title: string;
    slug: string;
}