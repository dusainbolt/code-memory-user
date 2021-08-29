export const RESPONSE_SEO_HOME = {
  getSeoHome: "seoHome",
};

export const SeoHomeResolver = `
  createBy
  description
  history {
    newValue
    oldValue
    type
  }
  domain
  id
  image {
    faviconUrlICO
    logo400x400
    faviconUrlJPG
    logo800x600
    logo1280x1280
    logoAlt
  }
  languageAlternates
  siteName
  searchBoxUrl
  social {
    facebookAppId
    facebookPageUrl
    twitterUrl
    youtubeUrl
  }
  status
  title
`;
