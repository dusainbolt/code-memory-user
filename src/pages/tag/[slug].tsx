import { useAppSelector, wrapper } from '@Redux/store';
import { END } from 'redux-saga';
import { SeoHome } from 'src/types/SeoHomeModel';
import LayoutCommon from '@Common/Layout';
import { ParamsPathSlug, SSRContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSeoHomeStart } from '@Redux/slices/seoHomeSlice';
import { SearchTagInput, Tag, TagStatus } from '@Models/TagModel';
import { GetStaticPaths } from 'next';
import { getEntireTags } from '@GraphQL/tagRequest';
import { getListTagSliceStart } from '@Redux/slices/tagSlice';

const TagDetail: React.FC<any> = () => {
  return (
    <LayoutCommon header={false} footer={false} scrollHeader>
      {/* <Meta seoHome={seoHome} /> */}
      {/* <SeoHomeComponent />
      <TagComponent /> */}
      <div>12312321</div>
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

export const getStaticProps = wrapper.getStaticProps(async (content: SSRContext) => {
  const {
    store: { dispatch, sagaTask },
    params,
    locale,
  } = content;

  console.log('PARAAMAMAMAMAMM', params);

  const paramsTagNew: SearchTagInput = {
    key: '',
    limit: 20,
    offset: 0,
    status: [TagStatus.ACTIVE],
  };

  // dispatch(getListTagSliceStart({ input: paramsTagNew }));

  dispatch(getSeoHomeStart());
  dispatch(END);
  await sagaTask.toPromise();

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});
