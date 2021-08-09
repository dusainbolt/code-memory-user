import { FC } from 'react';
import ProfileComponent from '@Components/Profile';
import Meta from '@Common/Meta';
import { GetStaticProps } from 'next';
import { useAppSelector, wrapper } from '@Redux/store';
import { END } from 'redux-saga';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import LayoutCommon from '@Common/Layout';

import 'swiper/swiper.min.css';
import { SeoHome } from 'src/types/SeoHomeModel';
import { SSGContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IndexPage: FC<any> = () => {
  const seoHome = useAppSelector(store => store.seoHomeReducer) as SeoHome;
  const { messageCrash } = useAppSelector(store => store.loadingReducer);
  return (
    !messageCrash && (
      <LayoutCommon blogBackground={false} header={false} footer={false} seoHome={seoHome}>
        <Meta title="Lê Huy Du - Developer Profile" seoHome={seoHome} />
        <ProfileComponent />
      </LayoutCommon>
    )
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async (context: SSGContext) => {
  const { store, locale } = context;
  store.dispatch(getSeoHome());
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});
