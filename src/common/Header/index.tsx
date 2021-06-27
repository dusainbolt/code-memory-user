import ButtonCommon from '@Common/Button';
import { Box } from '@Common/Box';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { faBars, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import LogoHeader from '@Common/Header/LogoHeader';
import MenuHeader from './MenuHeader';
import { useAppSelector } from '@Redux/store';
import useScrollHeader from 'src/hooks/scroll-header';

interface IHeader {
    scrollHeader?: boolean;
}

const Header: React.FC<IHeader> = ({ scrollHeader = false }) => {
    const { t } = useTranslation();
    // const [scrollTop, setScrollTop] = useState<number>(0);
    const [visibleDraw, setVisibleDraw] = useState<boolean>(false);
    const { token } = useAppSelector(store => store.loginReducer);
    // const dispatch = useAppDispatch();
    const { scrollTop } = useScrollHeader(scrollHeader);
    // useEffect(() => {
    //     window.addEventListener('scroll', onScroll);
    //     setTimeout(() => {
    //         window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    //     }, 100);
    //     dispatch(actionUser.userStartApp());
    // }, []);

    // const onScroll = e => {
    //     const scrollHeight = e.target.documentElement.scrollTop;
    //     setScrollTop(scrollHeight);
    // };

    const onToggleDraw = () => {
        setVisibleDraw(!visibleDraw);
    };

    const menuHeaderCommon = (
        <Box className="header--menu-wrap">
            <MenuHeader />
            {!token && <ButtonCommon href="/login" type="primary" shape="round" fontAWS={faSignInAlt} className="header--button-login">
                {t('home.txt_btn_login')}
            </ButtonCommon>}
        </Box>
    );

    return (
        <header className={clsx('header--wrapper', scrollTop > 500 && 'scrolling')}>
            <Box className="container header--container">
                <LogoHeader />
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
