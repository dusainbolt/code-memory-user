import { HistoryField } from './App/Context';
import { User } from './UserModel';

export type SeoHomeImage = {
    faviconUrlICO: string,
    faviconUrlJPG: string,
    logo400x400: string,
    logo800x600: string,
    logo1280x720: string,
    logoAlt: string,
    logoAltEN: string,
}

export type SeoHomeSocial = {
    facebookAppId: string,
    facebookPageUrl: string,
    twitterUrl: string,
    youtubeUrl: string,
}

export interface SeoHome {
    id?: string,
    title?: string,
    titleEN?: string,
    description?: string,
    descriptionEN?: string,
    domain?: string,
    facebookChatPlugin?: string,
    image?: SeoHomeImage,
    searchBoxUrl?: string,
    siteName?: string,
    social?: SeoHomeSocial,
    history?: HistoryField[],
    createBy?: string;
    createdAt?: string;
    reason?: string;
    userCreate?: User;
}