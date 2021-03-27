import { Link } from '@I18n/index';
import { STATUS } from '@Config/contains';
import { memo } from 'react';

interface _MenuItem {
    content: string,
    href: string,
    active: boolean
}

const MenuItem: React.FC<_MenuItem> = ({ content, href, active }) => {

    return (
        <li className={`menu__item ${active ? STATUS.ACTIVE : STATUS.NORMAL}`}>
            <Link href={href}>
                <a className="menu__link">{content}</a>
            </Link>
        </li>
    );
};

export default memo(MenuItem);
