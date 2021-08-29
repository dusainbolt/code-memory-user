import { getSeoHomeSlice } from '@Redux/slices/seoHomeSlice';
import { useAppSelector } from '@Redux/store';
import { LogoJsonLd, NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { FC } from 'react';

export const SeoHomeComponent: FC<any> = () => {
  const seoHome = useAppSelector(getSeoHomeSlice);
  const { image, social } = seoHome;
  return seoHome.title ? (
    <>
      <NextSeo
        // Tieu de
        title={seoHome.title}
        // mo ta
        description={seoHome.description}
        // Duong dan hien tai
        canonical={seoHome.domain}
        openGraph={{
          // Type mac dinh de la web site
          type: 'website',
          // Van la url hien tai
          url: seoHome.domain,
          // Van la tieu de
          title: seoHome.title,
          // Van la mo ta
          description: seoHome.description,
          // image 1280 * 720px
          images: [
            {
              url: image.logo1280x1280,
              width: 1280,
              height: 720,
              alt: image.logoAlt,
            },
          ],
          // Site url
          site_name: seoHome.siteName,
        }}
        // facebook id
        facebook={{
          appId: social.facebookAppId,
        }}
        // Twitter config
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        // Robots props
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
        // Ngon ngu that the
        languageAlternates={[
          {
            hrefLang: seoHome.languageAlternates,
            href: `${seoHome.domain}/${seoHome.languageAlternates}`,
          },
        ]}
        // Fave icon 1 loai .ico 76x76, mot loai la jpg
        additionalLinkTags={[
          {
            rel: 'icon',
            href: image.faviconUrlICO,
          },
          {
            rel: 'apple-touch-icon',
            href: image.faviconUrlJPG,
            sizes: '76x76',
          },
        ]}
      />
      <SiteLinksSearchBoxJsonLd
        // URL site
        url={seoHome.domain}
        potentialActions={[
          {
            // Url search
            // target: 'https://query.example.com/search?q',
            target: `${seoHome.searchBoxUrl}?q`,
            queryInput: 'search_term_string',
          },
        ]}
      />
      <LogoJsonLd
        // URL logo min 112x112 => 400x400
        logo={image.logo400x400}
        // URL site
        url={seoHome.domain}
      />
    </>
  ) : (
    <></>
  );
};
