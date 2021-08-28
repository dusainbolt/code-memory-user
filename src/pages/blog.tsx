import BlogComponent from '@Components/Blog';
import { wrapper } from '@Redux/store';
import LayoutCommon from '@Common/Layout';
import { SSRContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const BlogPage: React.FC<any> = () => {
  return (
    <LayoutCommon header={false} footer={false} scrollHeader>
      {/* <Meta seoHome={seoHome} /> */}
      <BlogComponent />
    </LayoutCommon>
  );
};

export default BlogPage;

export const getStaticProps = wrapper.getStaticProps(async ({ locale }: SSRContext) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});
