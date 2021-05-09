import Head from 'next/head';
import getConfig from 'next/config';
import { staticPath } from '@Utils/index';

const {
    publicRuntimeConfig: { DOMAIN_APP },
} = getConfig();

export const DEFAULT_SEO = {
    appName: 'CodeMemory',
    title: 'Trang chủ CodeMemory - Điểm đến của sự chia sẻ, học hỏi, trao đổi trong lĩnh vực lập trình',
    description: 'Hy vọng mình sẽ đem đến cái nhìn chân thưc, sự đam mê và thích thú về lĩnh vực này tới cho các bạn.',
    keywords: 'CodeMemory, CodeMemory Blog, CodeMemory diễn đàn, CodeMemory khóa học, CodeMemory Dịch vụ, Kiến thức, Lập trình, làm website, làm ứng dụng',
    ogImage:  staticPath('/images/avatar_home_page.png'),
    ogType: 'website',
    ogUrl: DOMAIN_APP
};

const HeadSEO = ({
    title = DEFAULT_SEO.title,
    appName = DEFAULT_SEO.appName,
    keywords = DEFAULT_SEO.keywords,
    ogImage = DEFAULT_SEO.ogImage,
    ogType = DEFAULT_SEO.ogType,
    description = DEFAULT_SEO.description,
    ogUrl = DEFAULT_SEO.ogUrl
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Du Sainbolt" />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={appName} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={ogUrl} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Head>
    );
};

export default HeadSEO;
