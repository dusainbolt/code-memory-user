import { FC } from 'react';
import { GetStaticProps } from 'next';
import { wrapper } from '@Redux/store';
import LayoutCommon from '@Common/Layout';
import 'swiper/swiper.min.css';
import { SSGContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SeoHomeComponent } from '@Common/Meta/SeoHome';
import { getSeoHomeRequest } from '@GraphQL/seoHomeRequest';
import { getSeoHomeSuccess } from '@Redux/slices/seoHomeSlice';
import { useTranslation } from 'next-i18next';
import HomeBanner from '@Components/Home/Banner';
import InteractWrap from '@Components/Home/InteractWrap';
import ServiceWrap from '@Components/Home/ServiceWrap';
import Link from 'next/link';
import Box from '@Common/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const IndexPage: FC<any> = () => {
  const { t } = useTranslation();

  return (
    <LayoutCommon blogBackground={false} scrollHeader>
      <SeoHomeComponent />
      <main>
        <HomeBanner />
        <InteractWrap />
        <ServiceWrap />
        <Box className="home__link-to-about flx-center p-lr-20 column">
          <FontAwesomeIcon icon={faArrowDown} />
          <Link href="/about">
            <a className="text mt-20 mb-32">{t('home.txt_link_to_about')}</a>
          </Link>
        </Box>
      </main>
    </LayoutCommon>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({ locale, store }: SSGContext) => {
  try {
    const seoHome = await getSeoHomeRequest();

    store.dispatch(getSeoHomeSuccess(seoHome));
  } catch (error) {
    console.log('Fetch data error', error);
  }

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});
