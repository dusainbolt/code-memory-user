import Meta from '@Common/Meta';
import BlogComponent from '@Components/Blog';
import { GetStaticProps } from 'next';
import { useAppSelector, wrapper } from '@Redux/store';
import { getSeoHome } from '@Redux/actionCreators/seoHomeActionCreators';
import { END } from 'redux-saga';
import { SeoHome } from 'src/models/SeoHomeModel';
import LayoutCommon from '@Common/Layout';

const BlogPage: React.FC<any> = () => {
  const seoHome = useAppSelector(store => store.seoHomeReducer) as SeoHome;

  return (
    <LayoutCommon header={false} footer={false} scrollHeader seoHome={seoHome}>
      <Meta seoHome={seoHome} />
      <BlogComponent />
    </LayoutCommon>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
  store.dispatch(getSeoHome());
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return { props: {} };
});
