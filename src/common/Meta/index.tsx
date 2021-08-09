import Head from "next/head";
import getConfig from "next/config";
import { objToArrayValues, staticPath } from "@Utils/func";
import { FC } from "react";
import { SeoHome } from "src/types/SeoHomeModel";

const {
  publicRuntimeConfig: { DOMAIN_APP },
} = getConfig();

export const TYPE_SEO = {
  SEO_HOME: 1,
};

export const DEFAULT_SEO = {
  appName: "CodeMemory",
  title:
    "Trang chủ CodeMemory - Điểm đến của sự chia sẻ, học hỏi, trao đổi trong lĩnh vực lập trình",
  description:
    "Nền tàng chia sẻ blog, khóa học, diễn đàn. Giúp mở ra cái nhìn tổng quan, Đốt cháy niềm đam mê, khơi gợi sự sáng tạo trong chúng ta",
  keywords:
    "CodeMemory, CodeMemory Blog, CodeMemory diễn đàn, CodeMemory khóa học, CodeMemory Dịch vụ, Kiến thức, Lập trình, làm website, làm ứng dụng",
  ogImage: staticPath("/images/og_code_memory.png"),
  // ogImage: 'https://appdu-storage.s3-ap-southeast-1.amazonaws.com/118005360_928999227584443_8060562362571425079_o.png',
  ogType: "website",
  ogUrl: DOMAIN_APP,
};

export interface HeadSEO {
  seoHome: SeoHome;
  type?: any;
  title?: string;
}

const HeadSEO: FC<HeadSEO> = ({ seoHome = {}, type = "", title = "" }) => {
  const titleMeta = title || seoHome?.meta?.title;
  const { meta, contact } = seoHome;
  const jsonLDHome = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@id": `${meta?.domain}/#${meta?.jsonType}`,
          "@context": "http://schema.org",
          "@type": meta?.jsonType,
          name: seoHome?.appName,
          url: meta?.domain,
          address: contact?.address,
          email: contact?.email,
          logo: {
            "@type": "ImageObject",
            url: meta?.logoUrl,
            width: meta?.logoWidth,
            height: meta?.logoHeight,
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: contact?.phone,
              contactType: "customer service",
              areaServed: "VN",
              availableLanguage: ["EN", "VN"],
            },
          ],
          sameAs: objToArrayValues(seoHome.social),
        }),
      }}
    />
  );
  // console.log(Object.entries(seoHome.social));
  switch (type) {
    default:
      return (
        <Head>
          <link
            rel="icon"
            href={staticPath("/favicon.png")}
            type="image/png"
            sizes="16x16"
          />
          <title>{titleMeta}</title>
          <meta name="description" content={meta?.description} />
          <meta name="keywords" content={seoHome.keyWord} />
          <meta name="author" content={seoHome.author} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={titleMeta} />
          <meta property="og:description" content={meta?.description} />
          <meta property="og:site_name" content={seoHome.appName} />
          <meta property="og:image" content={meta?.imageUrl} />
          <meta property="og:url" content={meta?.domain} />
          <meta property="twitter:card" content="summary" />
          <meta name="twitter:image" content={seoHome.meta.imageUrl} />
          <meta property="twitter:title" content={titleMeta} />
          <meta property="twitter:description" content={meta?.description} />
          {jsonLDHome}
        </Head>
      );
  }
};

export default HeadSEO;
