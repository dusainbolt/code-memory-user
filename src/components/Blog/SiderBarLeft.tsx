import { Box } from '@Common/Box';
import { FC } from 'react';
import LogoHeader from '@Common/Header/LogoHeader';
import MenuBlog from '@Components/Blog/MenuBlog';
import { Avatar, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { faBell, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SiderBarLeft: FC<any> = () => {
    return (
        <Box className="sider-left">
            <Box className="sider-left__top">
                <LogoHeader />
                <MenuBlog />
            </Box>
            <Box className="sider-left__bottom">
                <Box className="pb-18 center-block">
                    <FontAwesomeIcon icon={faMoon} />
                </Box>
                <Box className="pb-28 badge-notify center-block">
                    <Badge count={99} overflowCount={10}>
                        <FontAwesomeIcon icon={faBell} />
                    </Badge>
                </Box>
                <Box className="pb-30">
                    <Avatar size={40} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                        U
                    </Avatar>
                </Box>
            </Box>
        </Box>
    );
};

export default SiderBarLeft;
