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
        if(!keys[0] || !keys[1]){
            return "";
        }
        if(!LangStrings[locale]?.menu?.txt_home || !LangStrings[_defaultLocale]?.menu?.txt_home){
            console.warn(`No string '${keys[0]} + ${keys[1]}' for locale '${locale}'`);
            return "";
        }
        return LangStrings[locale][keys[0]][keys[1]] || LangStrings[_defaultLocale][keys[0]][keys[1]] || '';
    }

    return { t, locale };
}
