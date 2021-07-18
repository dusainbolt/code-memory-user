import Box from '@Common/Box';
import { FC, useState } from 'react';
import LogoHeader from '@Common/Header/LogoHeader';
import MenuBlog from '@Components/Blog/MenuBlog';
import { Avatar, Badge, Drawer, Typography } from 'antd';
import { faBars, faBell, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from '@Common/LanguageProvider/useTranslation';
const SiderBarLeft: FC<any> = () => {
    const [visibleDraw, setVisibleDraw] = useState<boolean>(false);
    const onToggleDraw = () => {
        setVisibleDraw(!visibleDraw);
    };
    const { t } = useTranslation();
    return (
        <Box className="sider-left">
            <Box className="sider-left__top">
                <FontAwesomeIcon onClick={onToggleDraw} className="header__menu-icon" icon={faBars} />
                <LogoHeader />
                <MenuBlog className="sider-left__menu-pc" />
                <Drawer
                    className="sider-left__drawer full-w"
                    title={<LogoHeader />}
                    placement="left"
                    closable={true}
                    onClose={onToggleDraw}
                    visible={visibleDraw}>
                    <Typography.Paragraph className="title-4 mb-12">{t('menu.list_menu')}</Typography.Paragraph>
                    <MenuBlog />
                </Drawer>
            </Box>
            <Box className="sider-left__bottom">
                <Box className="pb-18 center-block fontAWS">
                    <FontAwesomeIcon icon={faMoon} />
                </Box>
                <Box className="pb-28 badge-notify fontAWS center-block">
                    <Badge count={99} overflowCount={10}>
                        <FontAwesomeIcon icon={faBell} />
                    </Badge>
                </Box>
                <Box className="pb-30">
                    <Avatar size={40} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                        U
                    </Avatar>
                </Box>
            </Box>
        </Box>
    );
};

export default SiderBarLeft;
