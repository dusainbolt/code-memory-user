import { Box } from '@Common/Box';
import { FC } from 'react';
import BoxSuggestLogin from '@Components/Blog/BoxSuggestLogin';

const BlogContent: FC<any> = () => {
    return (
        <Box className="blog-content">
            <Box className="sticky-content">
                <BoxSuggestLogin />
                <BoxSuggestLogin />
                <BoxSuggestLogin />
            </Box>
        </Box>
    );
};
export default BlogContent;
