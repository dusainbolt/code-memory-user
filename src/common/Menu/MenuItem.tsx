import { STATUS } from '@Config/contains';
import Link from 'next/link';
import { memo } from 'react';

interface _MenuItem {
    text: string,
    href: string,
    active: boolean
}

const MenuItem: React.FC<_MenuItem> = ({ text, href, active }) => {

    return (
        <li className={`menu--item ${active ? STATUS.ACTIVE : STATUS.NORMAL}`}>
            <Link href={href}>
                <a className="menu--link">{text}</a>
            </Link>
        </li>
    );
};

export default memo(MenuItem);
