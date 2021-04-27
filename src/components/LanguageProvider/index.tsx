import { createContext, useEffect, useState } from 'react';

export const defaultLocale = 'vn';
export const locales = ['vn', 'eng'];
export const LanguageContext = createContext([]);

export const LanguageProvider: React.FC<any> = ({ children }) => {
    const [locale, setLocale] = useState('vn');

    const changeLocale = (value) => {
        setLocale(value);
        localStorage.setItem('lang', value);
    };

    useEffect(() => {
        if (!window) {
            return;
        }
        const language = localStorage.getItem('lang') || locale;
        setLocale(language);
    }, []);

    return <LanguageContext.Provider value={[locale, changeLocale]}>{children}</LanguageContext.Provider>;
};
