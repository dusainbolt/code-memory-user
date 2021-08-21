import Meta from '@Common/Meta';
import { useAppSelector, wrapper } from '@Redux/store';
import { END } from 'redux-saga';
import { SeoHome } from 'src/types/SeoHomeModel';
import LayoutCommon from '@Common/Layout';
import { SSRContext } from 'src/types/App/Context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSeoHomeStart } from '@Redux/slices/seoHomeSlice';
import TagComponent from '@Components/Tag/TagComponent';
import { getListTagSliceStart } from '@Redux/slices/tagSlice';
import { SearchTagInput, TagStatus } from '@Models/TagModel';
import { GetListTagAction } from '@Redux/actionsTypes/tagActionTypes';

const BlogPage: React.FC<any> = () => {
  const seoHome = useAppSelector(store => store.seoHomeSlice) as SeoHome;

  return (
    <LayoutCommon header={false} footer={false} scrollHeader seoHome={seoHome}>
      <Meta seoHome={seoHome} />
      <TagComponent />
    </LayoutCommon>
  );
};

export default BlogPage;

export const getStaticProps = wrapper.getStaticProps(async (content: SSRContext) => {
  const {
    store: { dispatch, sagaTask },
    locale,
  } = content;

  const paramsTagNew: SearchTagInput = {
    key: '',
    limit: 20,
    offset: 0,
    status: [TagStatus.ACTIVE],
  };

  dispatch(getSeoHomeStart());
  dispatch(getListTagSliceStart({ input: paramsTagNew }));

  dispatch(END);
  await sagaTask.toPromise();

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
});
