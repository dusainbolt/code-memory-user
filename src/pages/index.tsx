import { FC } from 'react';
import HomePageComponent from '@Components/Home';
import { GetStaticProps } from 'next';
import { wrapper } from '@Redux/store';
import LayoutCommon from '@Common/Layout';
import 'swiper/swiper.min.css';
import { SSGContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SeoHomeComponent } from '@Common/Meta/SeoHome';
import { getSeoHomeRequest } from '@GraphQL/seoHomeRequest';
import { getSeoHomeSuccess } from '@Redux/slices/seoHomeSlice';

const IndexPage: FC<any> = () => {
  return (
    <LayoutCommon blogBackground={false} scrollHeader>
      <SeoHomeComponent />
      <HomePageComponent />
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
