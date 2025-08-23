
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, Translations, languages } from '@/lib/translations';

type LanguageCode = typeof languages[number]['code'];

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: Translations['en']; // Always return english translations for now
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  const t = translations[language as keyof Translations] || translations.en;

  const value = {
    language,
    setLanguage,
    t: t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
