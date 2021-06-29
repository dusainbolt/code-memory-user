import { Box } from '@Common/Box';
import { FC } from 'react';
import BoxSuggestLogin from '@Components/Blog/BoxSuggestLogin';
import CardBlog from '@Components/Blog/CardBlog';
import { Col, Row } from 'antd';

const BlogContent: FC<any> = () => {
    return (
        <Box className="blog-content mt-26">
            <Box className="sticky-content">
                <BoxSuggestLogin />
                <Box>
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                </Box>
                {/* </Box> */}
            </Box>
        </Box>
    );
};
export default BlogContent;
