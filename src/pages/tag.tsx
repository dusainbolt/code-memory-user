import { wrapper } from '@Redux/store';
import LayoutCommon from '@Common/Layout';
import { SSRContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSeoHomeSuccess } from '@Redux/slices/seoHomeSlice';
import TagComponent from '@Components/Tag/TagComponent';
import { getListTagSliceSuccess } from '@Redux/slices/tagSlice';
import { SearchTagInput, TagStatus } from '@Models/TagModel';
import { SeoHomeComponent } from '@Common/Meta/SeoHome';
import { getSeoHomeRequest } from '@GraphQL/seoHomeRequest';
import { getListTagRequest } from '@GraphQL/tagRequest';

const BlogPage: React.FC<any> = () => {
  return (
    <LayoutCommon header={false} footer={false} scrollHeader>
      <SeoHomeComponent />
      <TagComponent />
    </LayoutCommon>
  );
};

export default BlogPage;

export const getStaticProps = wrapper.getStaticProps(async ({ store, locale }: SSRContext) => {
  try {
    const paramsTagNew: SearchTagInput = {
      key: '',
      limit: 20,
      offset: 0,
      status: [TagStatus.ACTIVE],
    };

    const [seoHome, dataTagNew] = await Promise.all([getSeoHomeRequest(), getListTagRequest(paramsTagNew)]);

    store.dispatch(getSeoHomeSuccess(seoHome));
    store.dispatch(getListTagSliceSuccess(dataTagNew));
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
