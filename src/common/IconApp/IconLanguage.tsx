import Dropdown from '@Common/Dropdown';
import { faMagic, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import IconApp from '.';

interface _IconLanguage {
    className?: string;
}

const IconLanguage: React.FC<_IconLanguage> = ({ children, className, ...props }) => {
    const menu = (
        <Menu className="app-setting-menu">
            <SubMenu icon={<IconApp propsLayout={{width: 30, height: 30, circle: true}} className="icon-sub-menu" icon={faLanguage}/>} popupClassName="app-setting-menu-sub" title="Ngôn ngữ">
                <Menu.Item>3rd menu item</Menu.Item>
                <Menu.Item>4th menu item</Menu.Item>
            </SubMenu>
            {/* <Menu.Item >Giao diện</Menu.Item> */}
            <Menu.Item className="app-menu-item">Giao diện</Menu.Item>
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
