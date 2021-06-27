import { Box } from '@Common/Box';
import { FC } from 'react';
import LogoHeader from '@Common/Header/LogoHeader';
import MenuBlog from '@Components/Blog/MenuBlog';

const SiderBarLeft: FC<any> = () => {
    return (
        <Box className="sider-left">
            <Box className="sticky-spacer"></Box>
            <LogoHeader />
            <MenuBlog />
        </Box>
    );
};

export default SiderBarLeft;
