import { User } from './UserModel';

export enum SeoHomeStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

type SeoHomeHistory = {
    newValue: string,
    oldValue: string,
    type: string,
}

type SeoHomeImage = {
    faviconUrlICO: string,
    faviconUrlJPG: string,
    logo400x400: string,
    logo800x600: string,
    logo1280x1280: string,
    logoAlt: string,
}

type SeoHomeSocial = {
    facebookAppId: string,
    facebookPageUrl: string,
    twitterUrl: string,
    youtubeUrl: string,
}

export interface SeoHome {
    createBy?: string,
    description?: string,
    domain?: string,
    history?: SeoHomeHistory[],
    id?: string,
    image?: SeoHomeImage,
    languageAlternates?: string,
    searchBoxUrl?: string,
    siteName?: string,
    social?: SeoHomeSocial,
    status?: SeoHomeStatus,
    title?: string,
    userCreate?: User
}

