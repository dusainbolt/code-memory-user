import { useContext } from 'react';
import { LanguageContext, _defaultLocale } from './index';
import vn from '@Locales/vn';
import en from '@Locales/en';
import { isEmptyObj } from '@Utils/func';

const LangStrings = {
    vn,
    en,
    default: vn,
};

export const _tValue = (_tText: string, params: object = {}) => {
    const arrPrams = Object.keys(params);
    if (arrPrams.length) {
        arrPrams.forEach(key => {
            _tText = _tText.replace(`{{${key}}}`, params[key]);
        });
    }
    return _tText;
};

export default function useTranslation() {
    const [localeContext] = useContext(LanguageContext);
    let locale = localeContext || _defaultLocale;

    function t(key: string, params: object = {}) {
        const keys = key.split('.');
        if (!keys[0] || !keys[1]) {
            return '';
        }
        if (!LangStrings[locale]?.menu?.txt_home || !LangStrings[_defaultLocale]?.menu?.txt_home) {
            console.warn(`No string '${keys[0]}.${keys[1]}' for locale '${locale}'`);
            return `${keys[0]}.${keys[1]}`;
        }
        const value = LangStrings[locale][keys[0]][keys[1]] || LangStrings[_defaultLocale][keys[0]][keys[1]] || '';
        if(!isEmptyObj(params)){
            return _tValue(value, params)
        }
        return value;
    }

    return { t, locale };
}
