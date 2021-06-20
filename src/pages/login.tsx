import { FC, Fragment, useContext, useEffect } from 'react';
import Meta, { SeoHome } from '@Common/Meta';
import Header from '@Common/Header';
import Footer from '@Common/Footer';

import 'swiper/swiper.min.css';
// import { getSeoHome } from '@Services/seo-home-request';
import { GetStaticProps } from 'next';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { LoginComponent } from '@Components/Login';
import { AuthContext, UseProvideAuth } from 'src/Provider/auth';
import router, { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@Redux/store';
import { setVisibleLoadingAuth } from '@Redux/actionCreators/loadingActionCreators';

interface IIndexPage {
    seoHome: SeoHome;
}

const IndexPage: FC<IIndexPage> = props => {
    const { t } = useTranslation();
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
            {/* <Meta title={t('login.title_meta')} seoHome={props.seoHome} /> */}
            <Header />
            <LoginComponent />
            <Footer />
        </Fragment>
    );
};

export default IndexPage;

// export const getStaticProps: GetStaticProps = async () => {
//     const { data: seoHome } = await getSeoHome();
//     return {
//         props: { ...seoHome }, // will be passed to the page component as props
//         // Re-generate the post at most once per second
//         // if a request comes in
//         revalidate: 1800,
//     };
// };
