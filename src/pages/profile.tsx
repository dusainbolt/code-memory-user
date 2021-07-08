import { FC } from 'react';
import ProfileComponent from '@Components/Profile';
import Meta from '@Common/Meta';
import { GetStaticProps } from 'next';
import { useAppSelector, wrapper } from '@Redux/store';
import { END } from 'redux-saga';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import LayoutCommon from '@Common/Layout';

import 'swiper/swiper.min.css';
import { SeoHome } from 'src/models/seo-home';

const IndexPage: FC<any> = () => {
    const seoHome = useAppSelector(store => store.seoHomeReducer) as SeoHome;
    const { messageCrash } = useAppSelector(store => store.isLoadingReducer);
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

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
    store.dispatch(getSeoHome());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
});
