import { Box } from '@Common/Box';
import { FC } from 'react';
import SiderBarLeft from '@Components/Blog/SiderBarLeft';
import BlogContent from '@Components/Blog/BlogContent';

const BlogComponent: FC<any> = () => {
    return (
        <Box container>
            <Box className="layout-content">
                <SiderBarLeft />
                <BlogContent />
            </Box>
        </Box>
    );
};

export default BlogComponent;
