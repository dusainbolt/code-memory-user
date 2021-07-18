import Box from '@Common/Box';
import { FC } from 'react';
import SiderBarLeft from '@Components/Blog/SiderBarLeft';
import SiderBarRight from '@Components/Blog/SiderBarRight';
import BlogContent from '@Components/Blog/BlogContent';

const BlogComponent: FC<any> = () => {
    return (
        <Box container>
            <Box className="content-wrapper">
                <SiderBarLeft />
                <BlogContent />
                <SiderBarRight />
            </Box>
        </Box>
    );
};

export default BlogComponent;
