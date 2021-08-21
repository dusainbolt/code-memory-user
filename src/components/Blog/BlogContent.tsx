import Box from '@Common/Box';
import { FC } from 'react';
// import BoxSuggestLogin from '@Components/Blog/BoxSuggestLogin';
import ListContentBlog from './ListContentBlog';

const BlogContent: FC<any> = () => {
  return (
    <Box className="blog-content mt-26">
      <Box className="sticky-content">
        {/* <BoxSuggestLogin /> */}
        <ListContentBlog />
      </Box>
    </Box>
  );
};
export default BlogContent;
