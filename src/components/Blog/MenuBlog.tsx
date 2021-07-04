import { Box } from '@Common/Box';
import { FC, ReactNode } from 'react';
import { Menu, Typography } from 'antd';
import { SearchOutlined, ClockCircleOutlined, StarOutlined, TagOutlined, ReadOutlined } from '@ant-design/icons';
import useTranslation from '@Common/LanguageProvider/useTranslation';

interface IMenuBlog {
    text: string;
    link: string;
    icon: ReactNode;
}

const MenuBlog: FC<any> = () => {
    const { t } = useTranslation();
    const MENU_BLOG: IMenuBlog[] = [
        {
            text: 'lasted',
            link: '/blog',
            icon: <ClockCircleOutlined />,
        },
        {
            text: 'txt_search',
            link: '/search',
            icon: <SearchOutlined />,
        },

        {
            text: 'txt_news',
            link: '/news',
            icon: <ReadOutlined />,
        },
        {
            text: 'txt_tag',
            link: '/tag',
            icon: <TagOutlined />,
        },
        {
            text: 'saved',
            link: '/dev',
            icon: <StarOutlined />,
        },

        // {
        //     text: 'txt_news',
        //     link: '/favorite',
        //     icon: <HistoryOutlined />,
        // },
    ];
    return (
        <Box className="sider-left__menu">
            <Menu style={{ width: 256 }} defaultSelectedKeys={[MENU_BLOG[0].link]} mode="vertical">
                {MENU_BLOG.map(item => (
                    <Menu.Item key={item.link} icon={item.icon}>
                        <Typography.Link href={item.link} rel="noopener noreferrer">
                            {t(`blog.${item.text}`)}
                        </Typography.Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Box>
    );
};

export default MenuBlog;
