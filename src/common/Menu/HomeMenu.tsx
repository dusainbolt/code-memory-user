import MenuItem from './MenuItem';
import { Fragment, memo, useRef, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { LIST_MENU } from '@Config/contains';
import { useRouter } from 'next/router';

interface _HomeMenu {
    t: any
}

const HomeMenu: React.FC<_HomeMenu> = ({ t }) => {
    const router = useRouter();
    const menuRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);

    const menuResponsiveClass = clsx('menu__wrap', openMenu && 'menu__open');

    const toggleOpen = () => {
        setOpenMenu(!openMenu);
    };
    {console.log(t)}
    return (
        <>
            <button onClick={toggleOpen} className="menu__collapse">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div ref={menuRef} className={menuResponsiveClass}>
                <ul className="menu__list">
                    {LIST_MENU.map((item) => (
                        <MenuItem
                            key={t.menu[item.name]}
                            text={t.menu[item.name]}
                            href={item.href}
                            active={router.pathname.indexOf(item.href) !== -1}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default memo(HomeMenu);
