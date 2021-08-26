import { Fragment } from 'react';
import Meta from '@Common/Meta';
import Header from '@Common/Header';
import Footer from '@Common/Footer';
import { GetStaticProps } from 'next';
import { useAppSelector, wrapper } from '@Redux/store';
import { END } from 'redux-saga';
import { SeoHome } from 'src/types/SeoHomeModel';
import { SSGContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export interface IAboutPage {
  seoHome: SeoHome;
}

const AboutPage: React.FC<IAboutPage> = props => {
  const seoHome = useAppSelector(store => store.seoHomeSlice);

  return (
    <Fragment>
      <Meta seoHome={seoHome} />
      <Header />
      <Footer seoHome={seoHome} />
    </Fragment>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({ locale }: SSGContext) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});
