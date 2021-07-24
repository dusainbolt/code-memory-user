import ButtonCommon from '@Common/Button';
import Box from '@Common/Box';
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
  const [visibleDraw, setVisibleDraw] = useState<boolean>(false);
  const { token } = useAppSelector(store => store.loginReducer);
  const { scrollTop } = useScrollHeader(scrollHeader);

  const onToggleDraw = () => {
    setVisibleDraw(!visibleDraw);
  };

  const menuHeaderCommon = (
    <Box className="header__menu-wrap">
      <MenuHeader />
      {!token && (
        <ButtonCommon href="/login" type="primary" shape="round" fontAWS={faSignInAlt} className="header__button-login">
          {t('home.txt_btn_login')}
        </ButtonCommon>
      )}
    </Box>
  );

  return (
    <header className={clsx('header__wrapper', scrollTop > 500 && 'scrolling')}>
      <Box className="container header__container">
        <LogoHeader />
        {menuHeaderCommon}
        <FontAwesomeIcon onClick={onToggleDraw} className="header__menu-icon" icon={faBars} />
        <Drawer
          className="header__drawer"
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
