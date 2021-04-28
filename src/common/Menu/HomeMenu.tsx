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

    const menuResponsiveClass = clsx('menu__xs-wrap', openMenu && 'menu__open');
    const menuDrawerMashClass = clsx('menu__drawer-mask', openMenu && 'mask__open');

    const toggleOpen = () => {
        setOpenMenu(!openMenu);
    };

    const renderMenu = () => {
        return (
            <>
                <ul className="menu__list">
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
            <button onClick={toggleOpen} className="menu__collapse">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="menu__wrap">{renderMenu()}</div>
        </>
    );
};

export default HomeMenu;
