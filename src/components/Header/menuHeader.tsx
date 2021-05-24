import useTranslation from '@Components/LanguageProvider/useTranslation';
import { LIST_MENU } from '@Config/contains';
import { _styleLayout } from '@Config/models';
import { _getStyleLayout } from '@Utils/index';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { Menu } from 'antd';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

export interface _MenuHeader {}

const MenuHeader: React.FC<_MenuHeader> = ({}) => {
    const router = useRouter();
    const { t } = useTranslation();

    // const classActive = href => {
    //     return clsx('menu--link', {
    //         active: router.pathname.indexOf(href) !== -1,
    //     });
    // };

    return (
        <Menu
            selectedKeys={['mail']}
            overflowedIndicator={<MenuOutlined className="header--menu-icon-collapse" />}
            mode="horizontal"
            className="app-menu header--menu">
            {LIST_MENU.map((item, index) => (
                <Menu.Item key={index}>
                    <Link href={item.href}>{t(`menu.${item.name}`)}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default MenuHeader;
