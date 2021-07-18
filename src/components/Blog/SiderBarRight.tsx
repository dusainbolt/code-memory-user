import Box from '@Common/Box';
import { FC } from 'react';
import TopArticleTab from '@Components/Blog/TopArticleTab';

const SiderBarRight: FC<any> = () => {
    return (
        <Box className="sider-right pt-24">
            <Box className="sticky-spacer"></Box>
            <Box className="sider-right__content">
                <TopArticleTab />
            </Box>
        </Box>
    );
};

export default SiderBarRight;
