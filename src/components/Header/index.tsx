import Button from '@Common/Button';
import DrawerCommon from '@Common/Drawer';
import { AppLink, Box } from '@Common/Layout';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { faAngleDoubleDown, faBars, faSign, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { staticPath } from '@Utils/index';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MenuHeader from './menuHeader';
import clsx from 'clsx';
import { styleButtonLogin, styleLogoApp } from './style';

interface _Header {}

const Header: React.FC<_Header> = ({}) => {
    const { t } = useTranslation();
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [openDrawMenu, setOpenDrawMenu] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        setTimeout(() => {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }, 100);
    }, []);

    const onScroll = e => {
        const scrollHeight = e.target.documentElement.scrollTop;
        // top > 0 || top = 0
        // if ((!scrollTop && scrollHeight) || !scrollHeight) {
        //     setScrollTop(scrollHeight);
        // }

        setScrollTop(scrollHeight);

        //not remove setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };

    const toggleOpenMenu = () => {
        setOpenDrawMenu(!openDrawMenu);
    };

    return (
        <header className={clsx('header--wrapper', scrollTop > 500 && 'scrolling')}>
            <Box className="container header--container">
                <AppLink rel="trang chu" href="/">
                    <Box className="header--logo">
                        <Image width="209" height="51" alt="Logo CodeMemory" src={staticPath('/images/logo_header.png')} />
                    </Box>
                </AppLink>
                {/* <button onClick={toggleOpenMenu} className="menu--collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button> */}
                <Box className="header--menu-wrap">
                    <MenuHeader />
                    <Button type="primary" shape="round" fontAWS={faSignInAlt} className="header--button-login">
                        {t('home.txt_btn_login')}
                    </Button>
                </Box>
            </Box>
            {/* <DrawerCommon
                className="draw-header-menu"
                title="Danh sách lựa chọn"
                placement="right"
                onClose={toggleOpenMenu}
                visible={openDrawMenu}
                key="drawer-home-menu">
                <MenuHeader />
            </DrawerCommon> */}
        </header>
    );
};

export default Header;
