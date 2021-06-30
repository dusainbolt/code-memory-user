import { Box } from '@Common/Box';
import { FC } from 'react';
import TopArticleTab from '@Components/Blog/TopArticleTab';

const SiderBarRight: FC<any> = () => {
    return (
        <Box className="sider-right">
            <TopArticleTab />
        </Box>
    );
};

export default SiderBarRight;
