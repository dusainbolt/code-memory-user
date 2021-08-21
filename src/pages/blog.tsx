import Meta from '@Common/Meta';
import BlogComponent from '@Components/Blog';
import { useAppSelector, wrapper } from '@Redux/store';
import { END } from 'redux-saga';
import { SeoHome } from 'src/types/SeoHomeModel';
import LayoutCommon from '@Common/Layout';
import { SSRContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const BlogPage: React.FC<any> = () => {
  const seoHome = useAppSelector(store => store.seoHomeSlice) as SeoHome;

  return (
    <LayoutCommon header={false} footer={false} scrollHeader seoHome={seoHome}>
      <Meta seoHome={seoHome} />
      <BlogComponent />
    </LayoutCommon>
  );
};

export default BlogPage;

export const getStaticProps = wrapper.getStaticProps(async (content: SSRContext) => {
  const {
    store: { dispatch, sagaTask },
    locale,
  } = content;

  // dispatch(getSeoHome());
  dispatch(END);
  await sagaTask.toPromise();

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});
