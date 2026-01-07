import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' or 'ta'

  // Translation dictionary (Basic placeholder)
  const translations = {
    en: {
      brandName: 'Selection Broilers',
      home: 'Home',
      orderNow: 'Order Now',
      cart: 'Cart',
      liveChicken: 'Live Chicken',
      freshMeat: 'Fresh Meat',
      addToCart: 'Add to Cart',
      total: 'Total',
      checkout: 'Checkout'
    },
    ta: {
      brandName: 'செலக்ஷன் பிராய்லர்ஸ்',
      home: 'முகப்பு',
      orderNow: 'ஆர்டர் செய்யவும்',
      cart: 'கூடை',
      liveChicken: 'உயிர் கோழி',
      freshMeat: 'ஃப்ரெஷ் கறி',
      addToCart: 'சேர்',
      total: 'மொத்தம்',
      checkout: 'செக்அவுட்'
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      <div lang={language} style={{ height: '100%' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
