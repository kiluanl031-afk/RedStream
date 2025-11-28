import { Language, Translation } from './types';
import { Tv, Smartphone, Wifi, ShieldCheck, Zap, Headphones } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/212694843943";

export const FEATURE_ICONS = [Tv, Smartphone, Wifi, ShieldCheck, Zap, Headphones];

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.EN]: {
    nav: { home: "Home", features: "Features", pricing: "Pricing", contact: "Contact", getStarted: "Get Started" },
    hero: {
      title: "The Ultimate Streaming Experience",
      subtitle: "Access thousands of channels, movies, and series in 4K & HD. Stable, fast, and reliable.",
      ctaPrimary: "Try Now",
      ctaSecondary: "View Demo"
    },
    features: {
      title: "Why Choose RedStream?",
      subtitle: "Premium features designed for the best viewing experience.",
      list: [
        { title: "4K & HD Quality", desc: "Crystal clear picture quality for all your favorite content." },
        { title: "Multi-Device", desc: "Watch on Smart TV, Phone, Tablet, or Laptop." },
        { title: "99.9% Uptime", desc: "Reliable servers ensuring uninterrupted streaming." },
        { title: "Secure & Legal", desc: "Safe connection with privacy protection." },
        { title: "Instant Activation", desc: "Get your credentials immediately after purchase." },
        { title: "24/7 Support", desc: "Our team is here to help you around the clock." }
      ]
    },
    pricing: {
      title: "Simple Pricing",
      subtitle: "Choose the plan that fits your needs.",
      plans: [
        { name: "1 Month", price: "€10", duration: "month", features: ["1 Device", "4K/HD Quality", "All Channels", "24/7 Support"], cta: "Subscribe" },
        { name: "12 Months", price: "€60", duration: "year", features: ["2 Devices", "4K/HD Quality", "All Channels", "Priority Support", "Best Value"], cta: "Subscribe", popular: true },
        { name: "6 Months", price: "€35", duration: "6 months", features: ["1 Device", "4K/HD Quality", "All Channels", "24/7 Support"], cta: "Subscribe" }
      ]
    },
    footer: { copyright: "© 2024 RedStream. All rights reserved.", legal: "Legal", links: "Quick Links" }
  },
  [Language.FR]: {
    nav: { home: "Accueil", features: "Avantages", pricing: "Tarifs", contact: "Contact", getStarted: "Commencer" },
    hero: {
      title: "L'Expérience Streaming Ultime",
      subtitle: "Accédez à des milliers de chaînes, films et séries en 4K & HD. Stable, rapide et fiable.",
      ctaPrimary: "Essayer",
      ctaSecondary: "Voir Démo"
    },
    features: {
      title: "Pourquoi choisir RedStream ?",
      subtitle: "Fonctionnalités premium pour la meilleure expérience visuelle.",
      list: [
        { title: "Qualité 4K & HD", desc: "Image cristalline pour tous vos contenus préférés." },
        { title: "Multi-appareils", desc: "Regardez sur Smart TV, téléphone, tablette ou PC." },
        { title: "99.9% Disponibilité", desc: "Serveurs fiables assurant un streaming ininterrompu." },
        { title: "Sécurisé & Légal", desc: "Connexion sûre avec protection de la vie privée." },
        { title: "Activation Instantanée", desc: "Recevez vos accès immédiatement après l'achat." },
        { title: "Support 24/7", desc: "Notre équipe est là pour vous aider 24h/24." }
      ]
    },
    pricing: {
      title: "Tarifs Simples",
      subtitle: "Choisissez le plan qui vous convient.",
      plans: [
        { name: "1 Mois", price: "10€", duration: "mois", features: ["1 Appareil", "Qualité 4K/HD", "Toutes les chaînes", "Support 24/7"], cta: "S'abonner" },
        { name: "12 Mois", price: "60€", duration: "an", features: ["2 Appareils", "Qualité 4K/HD", "Toutes les chaînes", "Support Prioritaire", "Meilleur Choix"], cta: "S'abonner", popular: true },
        { name: "6 Mois", price: "35€", duration: "6 mois", features: ["1 Appareil", "Qualité 4K/HD", "Toutes les chaînes", "Support 24/7"], cta: "S'abonner" }
      ]
    },
    footer: { copyright: "© 2024 RedStream. Tous droits réservés.", legal: "Légal", links: "Liens Rapides" }
  },
  [Language.ES]: {
    nav: { home: "Inicio", features: "Características", pricing: "Precios", contact: "Contacto", getStarted: "Empezar" },
    hero: {
      title: "La Mejor Experiencia de Streaming",
      subtitle: "Accede a miles de canales, películas y series en 4K y HD. Estable, rápido y confiable.",
      ctaPrimary: "Probar",
      ctaSecondary: "Ver Demo"
    },
    features: {
      title: "¿Por qué elegir RedStream?",
      subtitle: "Características premium para la mejor experiencia.",
      list: [
        { title: "Calidad 4K y HD", desc: "Imagen cristalina para todo tu contenido." },
        { title: "Multi-dispositivo", desc: "Mira en Smart TV, teléfono, tablet o PC." },
        { title: "99.9% Uptime", desc: "Servidores fiables para streaming sin interrupciones." },
        { title: "Seguro y Legal", desc: "Conexión segura con protección de privacidad." },
        { title: "Activación Instantánea", desc: "Obtén acceso inmediatamente tras la compra." },
        { title: "Soporte 24/7", desc: "Nuestro equipo está aquí para ayudar 24/7." }
      ]
    },
    pricing: {
      title: "Precios Simples",
      subtitle: "Elige el plan que se adapte a ti.",
      plans: [
        { name: "1 Mes", price: "€10", duration: "mes", features: ["1 Dispositivo", "Calidad 4K/HD", "Todos los canales", "Soporte 24/7"], cta: "Suscribirse" },
        { name: "12 Meses", price: "€60", duration: "año", features: ["2 Dispositivos", "Calidad 4K/HD", "Todos los canales", "Soporte Prioritario", "Mejor Valor"], cta: "Suscribirse", popular: true },
        { name: "6 Meses", price: "€35", duration: "6 meses", features: ["1 Dispositivo", "Calidad 4K/HD", "Todos los canales", "Soporte 24/7"], cta: "Suscribirse" }
      ]
    },
    footer: { copyright: "© 2024 RedStream. Todos los derechos reservados.", legal: "Legal", links: "Enlaces" }
  },
  [Language.IT]: {
    nav: { home: "Home", features: "Caratteristiche", pricing: "Prezzi", contact: "Contatto", getStarted: "Iniziare" },
    hero: {
      title: "L'Esperienza Streaming Definitiva",
      subtitle: "Accedi a migliaia di canali, film e serie in 4K e HD. Stabile, veloce e affidabile.",
      ctaPrimary: "Prova",
      ctaSecondary: "Vedi Demo"
    },
    features: {
      title: "Perché scegliere RedStream?",
      subtitle: "Funzionalità premium per la migliore visione.",
      list: [
        { title: "Qualità 4K e HD", desc: "Immagini cristalline per i tuoi contenuti preferiti." },
        { title: "Multi-dispositivo", desc: "Guarda su Smart TV, telefono, tablet o PC." },
        { title: "99.9% Uptime", desc: "Server affidabili per streaming senza interruzioni." },
        { title: "Sicuro e Legale", desc: "Connessione sicura con protezione privacy." },
        { title: "Attivazione Immediata", desc: "Ricevi l'accesso subito dopo l'acquisto." },
        { title: "Supporto 24/7", desc: "Il nostro team è qui per aiutarti 24/7." }
      ]
    },
    pricing: {
      title: "Prezzi Semplici",
      subtitle: "Scegli il piano adatto a te.",
      plans: [
        { name: "1 Mese", price: "€10", duration: "mese", features: ["1 Dispositivo", "Qualità 4K/HD", "Tutti i canali", "Supporto 24/7"], cta: "Abbonati" },
        { name: "12 Mesi", price: "€60", duration: "anno", features: ["2 Dispositivi", "Qualità 4K/HD", "Tutti i canali", "Supporto Prioritario", "Miglior Valore"], cta: "Abbonati", popular: true },
        { name: "6 Mesi", price: "€35", duration: "6 mesi", features: ["1 Dispositivo", "Qualità 4K/HD", "Tutti i canali", "Supporto 24/7"], cta: "Abbonati" }
      ]
    },
    footer: { copyright: "© 2024 RedStream. Tutti i diritti riservati.", legal: "Legale", links: "Link Rapidi" }
  },
  [Language.AR]: {
    nav: { home: "الرئيسية", features: "المميزات", pricing: "الأسعار", contact: "اتصل بنا", getStarted: "ابدأ الآن" },
    hero: {
      title: "تجربة مشاهدة لا مثيل لها",
      subtitle: "شاهد آلاف القنوات والأفلام والمسلسلات بجودة 4K و HD. خدمة مستقرة وسريعة وموثوقة.",
      ctaPrimary: "جرب الآن",
      ctaSecondary: "شاهد العرض"
    },
    features: {
      title: "لماذا تختار RedStream؟",
      subtitle: "ميزات مميزة لتجربة مشاهدة أفضل.",
      list: [
        { title: "جودة 4K و HD", desc: "صورة فائقة الوضوح لجميع محتوياتك المفضلة." },
        { title: "متعدد الأجهزة", desc: "شاهد على التلفزيون الذكي أو الهاتف أو الجهاز اللوحي." },
        { title: "ثبات 99.9%", desc: "خوادم قوية لضمان بث دون انقطاع." },
        { title: "آمن وقانوني", desc: "اتصال آمن مع حماية الخصوصية." },
        { title: "تفعيل فوري", desc: "احصل على بياناتك فور الشراء." },
        { title: "دعم 24/7", desc: "فريقنا موجود لمساعدتك على مدار الساعة." }
      ]
    },
    pricing: {
      title: "خطط أسعار بسيطة",
      subtitle: "اختر الخطة التي تناسب احتياجاتك.",
      plans: [
        { name: "شهر واحد", price: "10€", duration: "شهر", features: ["جهاز واحد", "جودة 4K/HD", "جميع القنوات", "دعم 24/7"], cta: "اشترك" },
        { name: "12 شهر", price: "60€", duration: "سنة", features: ["جهازين", "جودة 4K/HD", "جميع القنوات", "دعم ذو أولوية", "أفضل قيمة"], cta: "اشترك", popular: true },
        { name: "6 أشهر", price: "35€", duration: "6 أشهر", features: ["جهاز واحد", "جودة 4K/HD", "جميع القنوات", "دعم 24/7"], cta: "اشترك" }
      ]
    },
    footer: { copyright: "© 2024 RedStream. جميع الحقوق محفوظة.", legal: "قانوني", links: "روابط سريعة" }
  }
};