import Dropdown from '@Common/Dropdown';
import { Box } from '@Common/Layout';
import { DARK_THEME } from '@Config/contains';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useEffect, useState } from 'react';

interface _IconLanguage {
    className?: string;
}

const IconLanguage: React.FC<_IconLanguage> = ({ children, className, ...props }) => {
    const menu = (
        <Menu className="app-setting-menu">
            <SubMenu icon={<>icon</>} popupClassName="app-setting-menu-sub" title="sub menu">
                <Menu.Item>3rd menu item</Menu.Item>
                <Menu.Item>4th menu item</Menu.Item>
            </SubMenu>
            {/* <Menu.Item >Giao diện</Menu.Item> */}
            <Menu.Item className="app-menu-item">Giao diện</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown placement="topLeft" trigger={['click']} overlay={menu}>
            <span className="app-setting-icon">
                <FontAwesomeIcon icon={faMagic} />
            </span>
        </Dropdown>
    );
};

export default IconLanguage;
