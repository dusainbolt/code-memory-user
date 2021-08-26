import { FC, useEffect } from 'react';
import Meta from '@Common/Meta';
import 'swiper/swiper.min.css';
import { GetStaticProps } from 'next';
import { LoginComponent } from '@Components/Login';
import { useAppSelector, wrapper } from '@Redux/store';
import { SeoHome } from 'src/types/SeoHomeModel';
import LayoutCommon from '@Common/Layout';
import { SSGContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/dist/client/router';
import { getSeoHomeSlice, getSeoHomeSuccess } from '@Redux/slices/seoHomeSlice';
import { getSeoHomeRequest } from '@GraphQL/seoHomeRequest';

interface ILoginPage {
  seoHome: SeoHome;
}

const LoginPage: FC<ILoginPage> = props => {
  const { t, i18n } = useTranslation();
  // const dispatch = useAppDispatch();
  // const seoHome = useAppSelector(store => store.seoHomeReducer);
  // const messageCrash = useAppSelector(store => store.loadingReducer.messageCrash);

  // const token = useAppSelector(store => store.loginReducer.token);

  const seoHome = useAppSelector(getSeoHomeSlice);
  console.log(seoHome);

  // const messageCrash = '';
  const token = '';
  const router = useRouter();
  console.log('TOKEN: ', token);

  useEffect(() => {
    if (token) {
      router.push('/blog');
    }
  }, [token]);

  return (
    <LayoutCommon header={false} footer={false} scrollHeader>
      <Meta title={t('login.title_meta')} seoHome={seoHome} />
      <LoginComponent />
    </LayoutCommon>
  );
};

export default LoginPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({ store, locale }: SSGContext) => {
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
