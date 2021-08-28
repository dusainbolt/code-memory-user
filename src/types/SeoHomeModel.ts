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

export type SeoHomeHistory = {
    newValue: string;
    oldValue: string;
    type: string;
};

export enum SeoHomeStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export interface SeoHome {
    description?: string;
    domain?: string;
    facebookAppId?: string;
    faviconUrlICO?: string;
    faviconUrlJPG?: string;
    history?: SeoHomeHistory[];
    id?: string;
    languageAlternates?: string;
    logo400x400?: string;
    logo800x600?: string;
    logo1280x1280?: string;
    logoAlt?: string;
    searchBoxUrl?: string;
    siteName?: string;
    status?: SeoHomeStatus;
    title?: string;
}
