import { useAppSelector, wrapper } from '@Redux/store';
import LayoutCommon from '@Common/Layout';
import { ParamsPathSlug, SSRContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FindTagBySlugInput, Tag, TagStatus } from '@Models/TagModel';
import { GetStaticPaths } from 'next';
import { getEntireTags, getTagBySlugRequest } from '@GraphQL/tagRequest';
import { getTagSlice, getTagDetailSuccess } from '@Redux/slices/tagSlice';
import { getSeoHomeSuccess } from '@Redux/slices/seoHomeSlice';
import { getSeoHomeRequest } from '@GraphQL/seoHomeRequest';
import { useRouter } from 'next/dist/client/router';
import { Descriptions } from 'antd';
import AntImage from '@Common/Image';

const TagDetail: React.FC<any> = () => {
  const data = useAppSelector(getTagSlice).tagDetail;
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading....................NEXT....................JS..</div>;
  }
  return (
    <LayoutCommon header={false} footer={false} scrollHeader>
      <Descriptions title="Tag Info" layout="vertical">
        <Descriptions.Item label="Title">{data.title}</Descriptions.Item>
        <Descriptions.Item label="Description">{data.description}</Descriptions.Item>
        <Descriptions.Item label="Thumbnail">
          <AntImage width={100} height={100} src={data.thumbnail} />
        </Descriptions.Item>
      </Descriptions>
    </LayoutCommon>
  );
};

export default TagDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get List Slug Tag
  const listSlugTags: Tag[] = await getEntireTags({ status: [TagStatus.ACTIVE] });

  // Create list Path
  const paths: ParamsPathSlug[] = listSlugTags.map(item => ({ params: { slug: item.slug }, locale: 'vi' }));

  return { paths, fallback: false };
};

export const getStaticProps = wrapper.getStaticProps(async ({ locale, params, store }: SSRContext) => {
  try {
    // Call api fetch data
    const tagDetail = await getTagBySlugRequest(params as FindTagBySlugInput);

    // Save data to store Redux
    store.dispatch(getTagDetailSuccess(tagDetail));
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
