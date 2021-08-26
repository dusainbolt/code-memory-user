import { useAppSelector, wrapper } from '@Redux/store';
import LayoutCommon from '@Common/Layout';
import { ParamsPathSlug, SSRContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FindTagBySlugInput, Tag } from '@Models/TagModel';
import { GetStaticPaths } from 'next';
import { getEntireTags, getTagBySlugRequest } from '@GraphQL/tagRequest';
import { getTagSlice, getTagDetailSuccess } from '@Redux/slices/tagSlice';
import { getSeoHomeSuccess } from '@Redux/slices/seoHomeSlice';
import { getSeoHomeRequest } from '@GraphQL/seoHomeRequest';

const TagDetail: React.FC<any> = () => {
  const data = useAppSelector(getTagSlice).tagDetail;
  return (
    <LayoutCommon header={false} footer={false} scrollHeader>
      {/* <Meta seoHome={seoHome} /> */}
      {/* <SeoHomeComponent />
      <TagComponent /> */}
      <div>12312321 {data.title}</div>
    </LayoutCommon>
  );
};

export default TagDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const listSlugTags: Tag[] = await getEntireTags();
  const paths: ParamsPathSlug[] = listSlugTags.map(item => ({ params: { slug: item.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = wrapper.getStaticProps(async ({ locale, params, store }: SSRContext) => {
  try {
    const [seoHome, dataTagNew] = await Promise.all([getSeoHomeRequest(), getTagBySlugRequest(params as FindTagBySlugInput)]);
    store.dispatch(getSeoHomeSuccess(seoHome));
    store.dispatch(getTagDetailSuccess(dataTagNew));
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
