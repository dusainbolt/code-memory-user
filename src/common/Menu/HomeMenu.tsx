import MenuItem from './MenuItem';
import { memo, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { LIST_MENU } from '@Config/contains';
import { useRouter } from 'next/router';
import Button from '@Common/Button';
import useTranslation from '@Components/LanguageProvider/useTranslation';
interface _HomeMenu {}

const HomeMenu: React.FC<_HomeMenu> = ({}) => {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(false);
    const { t } = useTranslation();

    const menuResponsiveClass = clsx('menu--xs-wrap', openMenu && 'menu--open');
    const menuDrawerMashClass = clsx('menu--drawer-mask', openMenu && 'mask--open');

    const toggleOpen = () => {
        setOpenMenu(!openMenu);
    };

    const renderMenu = () => {
        return (
            <>
                <ul className="menu--list">
                    {LIST_MENU.map((item, index) => (
                        <MenuItem key={index} text={t(`menu.${item.name}`)} href={item.href} active={router.pathname.indexOf(item.href) !== -1} />
                    ))}
                </ul>
                <Button label={'Contact'} width={150} round />
            </>
        );
    };

    return (
        <>
            <button onClick={toggleOpen} className="menu--collapse">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="menu--wrap">{renderMenu()}</div>
        </>
    );
};

export default HomeMenu;
