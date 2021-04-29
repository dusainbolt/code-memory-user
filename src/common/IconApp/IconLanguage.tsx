import Dropdown from '@Common/Dropdown';
import { Box } from '@Common/Layout';
import { DARK_THEME } from '@Config/contains';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';

interface _IconLanguage {
    className?: string;
}

const IconLanguage: React.FC<_IconLanguage> = ({ children, className, ...props }) => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            </Menu.Item>
            <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown placement={['topLeft']} content={menu}>
            <span className="app-icon-theme">
                <FontAwesomeIcon icon={faMagic} />
            </span>
        </Dropdown>
    );
};

export default IconLanguage;
