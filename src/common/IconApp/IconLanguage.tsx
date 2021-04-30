import Dropdown from '@Common/Dropdown';
import ImageWrapper from '@Common/ImageWrapper';
import { faMagic, faSun, faGlobe, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faWhmcs } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import IconApp from '.';
import IconImage from './IconImage';
import { useContext } from 'react';
import { LanguageContext } from '@Components/LanguageProvider';

interface _IconLanguage {
    className?: string;
}

export const styleIconSubMenu = { width: 36, height: 36, circle: true, mr: 6 };

export const styleIconImage = { width: 36, height: 36, circle: true, mr: 6, imgHeight: 15, imgWidth: 26 };

const IconLanguage: React.FC<_IconLanguage> = ({ children, className, ...props }) => {

    const [_locale, _changeLocale] = useContext(LanguageContext);

    const onClickMenu = value => () => {
        _changeLocale(value);
    };

    const menu = (
        <Menu className="app-setting-menu">
            <SubMenu
                icon={<IconApp propsLayout={styleIconSubMenu} className="icon-sub-menu" icon={faGlobe} />}
                popupClassName="app-setting-menu-sub"
                title="Ngôn ngữ">
                <Menu.Item onClick={onClickMenu('vn')}>
                    <IconImage className="icon-sub-menu" {...styleIconImage} src="/images/vn_flag.svg" /> Tieng viet
                </Menu.Item>
                <Menu.Item onClick={onClickMenu('en')}>
                    <IconImage className="icon-sub-menu" {...styleIconImage} src="/images/en_flag.svg" /> Tieng Anh
                </Menu.Item>
            </SubMenu>
            <SubMenu
                icon={<IconApp propsLayout={styleIconSubMenu} className="icon-sub-menu" icon={faSun} />}
                popupClassName="app-setting-menu-sub"
                title="Giao diện">
                <Menu.Item><IconApp propsLayout={styleIconSubMenu} className="icon-sub-menu" icon={faSun} /> 3rd menu item</Menu.Item>
                <Menu.Item><IconApp propsLayout={styleIconSubMenu} className="icon-sub-menu" icon={faMoon} /> 4th menu item</Menu.Item>
            </SubMenu>
        </Menu>
    );
    return (
        <Dropdown placement="topLeft" trigger={['click']} overlay={menu}>
            <span className="app-setting-icon cir">
                <FontAwesomeIcon icon={faMagic} />
            </span>
        </Dropdown>
    );
};

export default IconLanguage;
