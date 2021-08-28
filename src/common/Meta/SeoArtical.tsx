import { getSeoHomeSlice } from '@Redux/slices/seoHomeSlice';
import { useAppSelector } from '@Redux/store';
import { LocalBusinessJsonLd, NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { FC } from 'react';

// SUGGEST https://www.omgubuntu.co.uk/2021/01/how-to-install-edge-on-ubuntu-linux

export const SeoArtical: FC<any> = () => {
  // const seoHome = useAppSelector(getSeoHomeSlice);
  return (
    <>
      <NextSeo
        // Tieu de
        title={'Title next SEO'}
        // mo ta
        description="This example uses more of the available config options."
        // Duong dan hien tai
        canonical="https://www.canonical.ie/"
        openGraph={{
          // Type mac dinh de la web site
          type: 'website',
          // Van la url hien tai
          url: 'https://www.url.ie/a',
          // Van la tieu de
          title: 'Open Graph Title',
          // Van la mo ta
          description: 'Open Graph Description',
          // image 1280 * 720px
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 1280,
              height: 720,
              alt: 'Og Image Alt',
            },
          ],
          // Site url
          site_name: 'SiteName',
        }}
        // facebook id
        facebook={{
          appId: '1234567890',
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
            hrefLang: 'en',
            href: 'https://www.canonical.ie/de',
          },
        ]}
        // Fave icon 1 loai .ico 76x76, mot loai la jpg
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://www.test.ie/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: 'https://www.test.ie/touch-icon-ipad.jpg',
            sizes: '76x76',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />
      <SiteLinksSearchBoxJsonLd
        // URL site
        url="https://www.example.com"
        potentialActions={[
          {
            // Url search
            target: 'https://query.example.com/search?q',
            queryInput: 'search_term_string',
          },
        ]}
      />
      <LocalBusinessJsonLd
        type="Organization"
        id="http://davesdeptstore.example.com"
        name="Dave's Department Store"
        description="Dave's latest department store in San Jose, now open"
        url="http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427"
        telephone="+14088717984"
        address={{
          streetAddress: '1600 Saratoga Ave',
          addressLocality: 'San Jose',
          addressRegion: 'CA',
          postalCode: '95129',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '37.293058',
          longitude: '-121.988331',
        }}
        images={['https://example.com/photos/1x1/photo.jpg', 'https://example.com/photos/4x3/photo.jpg', 'https://example.com/photos/16x9/photo.jpg']}
        sameAs={['www.company-website-url1.dev', 'www.company-website-url2.dev', 'www.company-website-url3.dev']}
      />
    </>
  );
};
