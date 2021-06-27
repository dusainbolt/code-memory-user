import { Box } from '@Common/Box';
import { FC } from 'react';
import { Menu } from 'antd';
import { MailOutlined, CalendarOutlined } from '@ant-design/icons';

const MenuBlog: FC<any> = () => {
    const MENU_BLOG = [
        {
            text: "Gần Đây",
            link: "/blog",
        },
        {
            text: "Tâm Sự Dev",
            link: "/blog",
        },
        {
            text: "Thẻ",
            link: "/tag",
        },
        {
            text: "Tìm kiếm",
            link: "/tag",
        },
        {
            text: "Tin tức",
            link: "/tag",
        },
    ]
    return (
        <Box className="sider-left__menu">
            <Menu style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="vertical">
                <Menu.Item key="1" icon={<MailOutlined />}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="2" icon={<CalendarOutlined />}>
                    Navigation Two
                </Menu.Item>
            </Menu>
        </Box>
    );
};

export default MenuBlog;
