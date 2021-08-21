export interface SeoContact {
    address: string;
    email: string;
    phone: string;
}

export interface SeoSocial {
    youtube: string;
    facebook: string;
    facebookPage: string;
    skype: string;
    twitter: string;
}

export class SeoMeta {
    title: string;

    description: string;

    imageUrl: string;

    domain: string;

    jsonType: string;

    logoUrl: string;

    logoWidth: number;

    logoHeight: number;

    facebookPageId: string;
}

export interface SeoHome {
    owner?: string;
    appName?: string;
    keyWord?: string;
    author?: string;
    publisher?: string;
    contact?: SeoContact;
    social?: SeoSocial;
    meta?: SeoMeta;
}
