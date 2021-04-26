import { createContext, useEffect, useState } from 'react';

export const defaultLocale = 'vn';
export const locales = ['vn', 'en'];
export const LanguageContext = createContext([]);

export const LanguageProvider: React.FC<any> = ({ children }) => {
    const [locale, setLocale] = useState('vn');

    useEffect(() => {
        if (!window) {
            return;
        }
        const language = localStorage.getItem('lang') || locale;
        setLocale(language);
    }, [locale]);

    return <LanguageContext.Provider value={[locale, setLocale]}>{children}</LanguageContext.Provider>;
};
