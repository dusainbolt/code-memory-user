import { FC, Fragment, useEffect } from 'react';
import Meta from '@Common/Meta';
import Header from '@Common/Header';
import Footer from '@Common/Footer';

import 'swiper/swiper.min.css';
import { GetStaticProps } from 'next';
import { LoginComponent } from '@Components/Login';
import { useAppDispatch, useAppSelector, wrapper } from '@Redux/store';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import { END } from 'redux-saga';
import { SeoHome } from 'src/types/SeoHomeModel';

interface ILoginPage {
  seoHome: SeoHome;
}

// import { useRouter } from 'next/router';
import LayoutCommon from '@Common/Layout';
import { SSGContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/dist/client/router';
import seoHomeSlice, { getseoHomeSlice, getSeoHomeStart } from '@Redux/slices/seoHomeSlice';

const LoginPage: FC<ILoginPage> = props => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  // const seoHome = useAppSelector(store => store.seoHomeReducer);
  // const messageCrash = useAppSelector(store => store.loadingReducer.messageCrash);

  // const token = useAppSelector(store => store.loginReducer.token);

  const seoHome = useAppSelector(getseoHomeSlice);
  console.log(seoHome);

  const messageCrash = '';
  const token = '';
  const router = useRouter();

  useEffect(() => {
    console.log('TOKEN: ', token);
    if (token) {
      router.push('/blog');
    }
  }, [token]);

  // console.log(i18n);

  // useEffect(() => {
  //   i18n.changeLanguage('vi');
  //   console.log('12312312');
  // }, []);
  // useEffect(() => {
  //   dispatch(getSeoHomeStart());
  // }, []);

  return (
    !false && (
      <LayoutCommon header={false} footer={false} scrollHeader seoHome={seoHome}>
        <Meta title={t('login.title_meta')} seoHome={seoHome} />
        <LoginComponent />
      </LayoutCommon>
    )
  );
};

export default LoginPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async (context: SSGContext) => {
  const { store, locale } = context;
  store.dispatch(getSeoHomeStart());
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});
