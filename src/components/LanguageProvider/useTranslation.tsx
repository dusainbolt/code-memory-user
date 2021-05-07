import { useContext } from 'react';
import { LanguageContext, _defaultLocale } from './index';
import vn from '@Locales/vn';
import en from '@Locales/en';

const LangStrings = {
    vn,
    en,
    default: vn,
};

export default function useTranslation() {
    const [locale] = useContext(LanguageContext);
    
    function t(key: string) {
        const keys = key.split('.');
        if (!LangStrings[locale] || !LangStrings[locale][keys[0]] || !LangStrings[locale][keys[0]][keys[1]]) {
            console.warn(`No string '${key}' for locale '${locale}'`);
        }

        console.log(LangStrings);

        return LangStrings[locale][keys[0]][keys[1]] || LangStrings[_defaultLocale][keys[0]][keys[1]] || '';
    }

    return { t, locale };
}
