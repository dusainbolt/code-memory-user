import { AppLink, Nav } from '@Common/Layout';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { LIST_MENU } from '@Config/contains';
import { _styleLayout } from '@Config/models';
import { _getStyleLayout } from '@Utils/index';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export interface _MenuHeader {}

const MenuHeader: React.FC<_MenuHeader> = ({}) => {
    const router = useRouter();
    const { t } = useTranslation();

    const classActive = (href) => {
        return clsx('menu--link',{
            active: router.pathname.indexOf(href) !== -1
        })
    };

    return (
        <Nav flexBox className="menu--list">
            {LIST_MENU.map((item, index) => (
                <AppLink fontSize={16} mRow={22} fontWeight="bold" className={classActive(item.href)} key={index} href={item.href}>
                    {t(`menu.${item.name}`)}
                </AppLink>
            ))}
        </Nav>
    );
};

export default MenuHeader;
