import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  // Default to English, or detect browser lang if needed
  const [lang, setLang] = useState<Language>(Language.EN);
  
  // Set text direction based on language
  useEffect(() => {
    document.documentElement.dir = lang === Language.AR ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar currentLang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />
        <Features t={t.features} />
        <Pricing t={t.pricing} />
        <FAQ />
      </main>

      <Footer t={t.footer} />
      <WhatsAppButton />
    </div>
  );
};

export default App;