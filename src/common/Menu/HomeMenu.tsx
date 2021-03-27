import { Link } from '@I18n/index';
import MenuItem from './MenuItem';
import { memo, useRef, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { LIST_MENU } from '@Config/contains';
import Button from '@Common/Button';

interface _HomeMenu {}

const HomeMenu: React.FC<_HomeMenu> = () => {
    const targetUrlPath = window.location.pathname;
    const menuRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);

    const menuResponsiveClass = clsx('menu__wrap', openMenu && 'menu__open');

    const toggleOpen = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <button onClick={toggleOpen} className="menu__collapse">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div ref={menuRef} className={menuResponsiveClass}>
                <ul className="menu__list">
                    {LIST_MENU.map((item) => (
                        <MenuItem
                            key={item.name}
                            content={item.name}
                            href={item.href}
                            active={targetUrlPath.indexOf(item.href) !== -1}
                        />
                    ))}
                </ul>
                <div className="menu__btn">
                    <Button href="#" label="Sign in" link outline />
                    <Button
                        href="/second-page"
                        label="Join academy"
                        link
                        outline
                    />
                </div>
            </div>
        </>
    );
};

export default memo(HomeMenu);
