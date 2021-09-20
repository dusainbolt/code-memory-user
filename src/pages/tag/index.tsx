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
import { FETCH_POLICY } from '@Constants/constant';

const BlogPage: React.FC<any> = ({ locale }) => {
  return (
    <LayoutCommon header={false} footer={false} scrollHeader>
      <SeoHomeComponent locale={locale} />
      <TagComponent />
    </LayoutCommon>
  );
};

export default BlogPage;

export const getStaticProps = wrapper.getStaticProps(async ({ store, locale }: SSRContext) => {
  try {
    // Create Params get list tag for 10 items
    const paramsListTag: SearchTagInput = {
      key: '',
      limit: 10,
      offset: 0,
      status: [TagStatus.ACTIVE],
    };

    // Call api fetch data
    const listTag = await getListTagRequest(paramsListTag, FETCH_POLICY.NO_CACHE);

    // Save data to store Redux
    store.dispatch(getListTagSliceSuccess(listTag));
  } catch (error) {
    console.log('Fetch data error tag index', error);
  }
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});
