import { Fragment } from 'react';
import Header from '@Common/Header';
import Footer from '@Common/Footer';
import { GetStaticProps } from 'next';
import { useAppSelector, wrapper } from '@Redux/store';
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
