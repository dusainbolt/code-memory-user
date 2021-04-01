import vn from '@Locales/vn';
import en from '@Locales/en';

const actions = {
    'vn': vn,
    'eng': en,
    'default': vn
}

export const getLocale = (locale) => {
    return actions[locale] || actions['default'];
}