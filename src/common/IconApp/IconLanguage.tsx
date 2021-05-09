import { faMagic, faSun, faGlobe, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import IconApp from '.';
import IconImage from './IconImage';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@Components/LanguageProvider';
import { OPTION_LANG, OPTION_THEME } from '@Config/contains';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import DropdownCommon from '@Common/Dropdown';
import { staticPath } from '@Utils/index';

interface _IconLanguage {
    className?: string;
}

export const styleIconSubMenu = { width: 36, height: 36, circle: true, mr: 6 };

export const styleIconImage = { width: 36, height: 36, circle: true, mr: 6, imgHeight: 15, imgWidth: 26 };

export const getIconTheme = {
    dark: faMoon,
    light: faSun,
};

const IconLanguage: React.FC<_IconLanguage> = ({ children, className, ...props }) => {
    const [_locale, _changeLocale] = useContext(LanguageContext);
    const { t } = useTranslation();
    const [themeName, setThemeName] = useState('');

    const onClickMenu = value => () => {
        _changeLocale(value);
    };

    const onChangeTheme = valueTheme => () => {
        setThemeName(valueTheme);
        document.body.setAttribute('theme-data', valueTheme);
        localStorage.setItem('theme-app', valueTheme);
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme-app');
        const valueTheme = localTheme ? localTheme : OPTION_THEME.light;
        setThemeName(valueTheme);
        document.body.setAttribute('theme-data', localTheme);
    }, []);

    const menu = (
        <Menu className="app-setting-menu" selectedKeys={[_locale, themeName]}>
            <SubMenu
                icon={<IconApp propsLayout={styleIconSubMenu} className="icon-sub-menu" icon={faGlobe} />}
                popupClassName="app-setting-menu-sub"
                title="Ngôn ngữ">
                {OPTION_LANG.map(item => (
                    <Menu.Item key={item.value} onClick={onClickMenu(item.value)}>
                        <IconImage className="icon-sub-menu" {...styleIconImage} src={staticPath(item.src)} />
                        {t(`lang.${item.value}`)}
                    </Menu.Item>
                ))}
            </SubMenu>
            <SubMenu
                icon={<IconApp propsLayout={styleIconSubMenu} className="icon-sub-menu" icon={faSun} />}
                popupClassName="app-setting-menu-sub"
                title="Giao diện">
                {Object.values(OPTION_THEME).map(item => (
                    <Menu.Item onClick={onChangeTheme(item)} key={item}>
                        <IconApp propsLayout={styleIconSubMenu} className="icon-sub-menu" icon={getIconTheme[item]} /> {t(`theme.${item}`)}
                    </Menu.Item>
                ))}
            </SubMenu>
        </Menu>
    );
    return (
        <DropdownCommon placement="topLeft" trigger={['click']} overlay={menu}>
            <span className="app-setting-icon cir">
                <FontAwesomeIcon icon={faMagic} />
            </span>
        </DropdownCommon>
    );
};

export default IconLanguage;
