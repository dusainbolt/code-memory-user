import { FC } from 'react';
import HomePageComponent from '@Components/Home';
import Meta from '@Common/Meta';
import { GetStaticProps } from 'next';
import { useAppSelector, wrapper } from '@Redux/store';
import { END } from 'redux-saga';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import LayoutCommon from '@Common/Layout';

import 'swiper/swiper.min.css';
import { SeoHome } from 'src/models/SeoHomeModel';

const IndexPage: FC<any> = () => {
  const seoHome = useAppSelector(store => store.seoHomeReducer) as SeoHome;
  const { messageCrash } = useAppSelector(store => store.isLoadingReducer);
  return (
    !messageCrash && (
      <LayoutCommon blogBackground={false} scrollHeader seoHome={seoHome}>
        <Meta seoHome={seoHome} />
        <HomePageComponent />
      </LayoutCommon>
    )
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
  store.dispatch(getSeoHome());
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return { props: {} };
});
