import en from '@Locales/en';
import fr from '@Locales/fr';

const actions = {
    'en': en,
    'fr': fr,
    'default': en
}

export const getLocale = (locale) => {
    return actions[locale] || actions['default'];
}