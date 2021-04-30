import { createContext, useEffect, useState } from 'react';

export const _defaultLocale = 'vn';
export const _locales = ['vn', 'en'];
export const LanguageContext = createContext([]);

export const LanguageProvider: React.FC<any> = ({ children }) => {
    const [__locale, _setLocale] = useState(_defaultLocale);

    const _changeLocale = (value) => {
        _setLocale(value);
        localStorage.setItem('lang', value);
    };

    useEffect(() => {
        if (!window) {
            return;
        }
        const language = localStorage.getItem('lang') || __locale;
        if(language !== _defaultLocale){
            _setLocale(language);
        }
    }, []);

    return <LanguageContext.Provider value={[__locale, _changeLocale]}>{children}</LanguageContext.Provider>;
};
