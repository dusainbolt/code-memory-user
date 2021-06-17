import ButtonCommon from '@Common/Button';
import { Box } from '@Common/Layout';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { faBars, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { staticPath } from '@Utils/func';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MenuHeader from './menuHeader';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';

interface _Header {}

const Header: React.FC<_Header> = ({}): any => {
    const { t } = useTranslation();
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [visibleDraw, setVisibleDraw] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        setTimeout(() => {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }, 100);
    }, []);

    const onScroll = e => {
        const scrollHeight = e.target.documentElement.scrollTop;
        setScrollTop(scrollHeight);
    };

    const onToggleDraw = () => {
        setVisibleDraw(!visibleDraw);
    };

    const menuHeaderCommon = (
        <Box className="header--menu-wrap">
            <MenuHeader />
            <ButtonCommon type="primary" shape="round" fontAWS={faSignInAlt} className="header--button-login">
                {t('home.txt_btn_login')}
            </ButtonCommon>
        </Box>
    );

    return (
        <header className={clsx('header--wrapper', scrollTop > 500 && 'scrolling')}>
            <Box className="container header--container">
                <a href="/">
                    <Box className="header--logo">
                        <Image width="209" height="51" alt="Logo CodeMemory" src={staticPath('/images/logo_header.png')} />
                    </Box>
                </a>
                {menuHeaderCommon}
                <FontAwesomeIcon onClick={onToggleDraw} className="header--menu-icon" icon={faBars} />
                <Drawer
                    className="header--drawer"
                    title={t('menu.list_menu')}
                    placement="right"
                    closable={false}
                    onClose={onToggleDraw}
                    visible={visibleDraw}>
                    {menuHeaderCommon}
                </Drawer>
            </Box>
        </header>
    );
};

export default Header;
