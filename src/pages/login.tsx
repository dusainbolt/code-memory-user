import { FC, Fragment } from 'react';
import Meta, { SeoHome } from '@Common/Meta';
import Header from '@Common/Header';
import Footer from '@Common/Footer';

import 'swiper/swiper.min.css';
// import { getSeoHome } from '@Services/seo-home-request';
import { GetStaticProps } from 'next';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { LoginComponent } from '@Components/Login';
import { useAppSelector, wrapper } from '@Redux/store';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import { END } from 'redux-saga';

interface IIndexPage {
    seoHome: SeoHome;
}

const IndexPage: FC<IIndexPage> = props => {
    const { t } = useTranslation();
    const seoHome = useAppSelector(store => store.seoHomeReducer);

    // const router = useRouter();
    // const authContext: UseProvideAuth = useContext(AuthContext);
    // const dispatch = useAppDispatch();
    // const { loadingAuth } = useAppSelector(state => state.isLoadingReducer);
    // // const visibleLoadingAuth;
    // console.log(authContext.isSignedIn());
    // console.log(loadingAuth);
    // useEffect(() => {
    //     if (authContext.isSignedIn()) {
    //         // router.push('/');
    //         console.log('123123');
    //     } else {
    //         dispatch(setVisibleLoadingAuth(true));
    //     }
    // }, [authContext]);
    return (
        <Fragment>
            {/* {!loadingAuth && <div className="loading__auth">123123123213213</div>} */}
            <Meta title={t('login.title_meta')} seoHome={seoHome} />
            <Header />
            <LoginComponent />
            <Footer />
        </Fragment>
    );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
    store.dispatch(getSeoHome());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return { props: {} };
});
