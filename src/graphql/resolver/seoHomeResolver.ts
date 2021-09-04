export const RESPONSE_SEO_HOME = {
  getSeoHome: "seoHome",
};

export const SeoHomeResolver = `
  createBy
  description
  domain
  facebookChatPlugin
  history {
    key
    oldValue
    newValue
  }
  id
  image {
    logoAlt
    logoAltEN
    logo1280x720
    logo800x600
    faviconUrlJPG
    faviconUrlICO
    logo400x400
  }
  searchBoxUrl
  siteName
  social {
    youtubeUrl
    twitterUrl
    facebookAppId
    facebookPageUrl
  }
  title
  createdAt
  reason
  descriptionEN
  titleEN
`;