export enum Language {
  EN = 'EN',
  FR = 'FR',
  ES = 'ES',
  IT = 'IT',
  AR = 'AR'
}

export interface Translation {
  nav: {
    home: string;
    features: string;
    pricing: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    subtitle: string;
    list: Array<{
      title: string;
      desc: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: Array<{
      name: string;
      price: string;
      duration: string;
      features: string[];
      cta: string;
      popular?: boolean;
    }>;
  };
  footer: {
    copyright: string;
    legal: string;
    links: string;
  };
}