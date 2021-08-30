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
import { useRouter } from 'next/dist/client/router';
import { FETCH_POLICY } from '@Constants/constant';

const TagDetail: React.FC<any> = () => {
  const data = useAppSelector(getTagSlice).tagDetail;
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading....................NEXT....................JS..</div>;
  }
  return (
    <LayoutCommon header={false} footer={false} scrollHeader>
      <div>12312321 {data.title}</div>
      <div>{data.description}</div>
    </LayoutCommon>
  );
};

export default TagDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const listSlugTags: Tag[] = await getEntireTags();
  const paths: ParamsPathSlug[] = [];
  listSlugTags.forEach(item => {
    paths.push({ params: { slug: item.slug }, locale: 'vi' });
    paths.push({ params: { slug: item.slug }, locale: 'en' });
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = wrapper.getStaticProps(async ({ locale, params, store }: SSRContext) => {
  try {
    const [seoHome, dataTagNew] = await Promise.all([getSeoHomeRequest(), getTagBySlugRequest(params as FindTagBySlugInput, FETCH_POLICY.NO_CACHE)]);
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
    revalidate: 3,
  };
});
