import Box from '@Common/Box';
import { FC, ReactNode } from 'react';
import { Menu } from 'antd';
import { SearchOutlined, ClockCircleOutlined, StarOutlined, TagOutlined, ReadOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

interface IMenuBlog {
  text: string;
  link: string;
  icon: ReactNode;
}

const MenuBlog: FC<any> = ({ className }) => {
  const { t } = useTranslation(['common']);
  const router = useRouter();
  console.log(router);
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
  ];
  return (
    <Box className={clsx('sider-left__menu mt-30', [className] && className)}>
      <Menu style={{ width: 256 }} selectedKeys={[router.pathname]} defaultSelectedKeys={[MENU_BLOG[0].link]} mode="vertical">
        {MENU_BLOG.map(item => (
          <Menu.Item key={item.link} icon={item.icon}>
            <Link href={item.link}>
              <a> {t(`menu_blog.${item.text}`)}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuBlog;
