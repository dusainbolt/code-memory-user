import useTranslation from '@Components/LanguageProvider/useTranslation';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface _MenuHeader {}

export const LIST_MENU = [
    { name: 'txt_home', href: '/' },
    { name: 'txt_blog', href: '/blog' },
    { name: 'txt_about', href: '/about' },
    { name: 'txt_contact', href: '/contact' },
    { name: 'txt_services', href: '/service' },
];

const MenuHeader: React.FC<_MenuHeader> = ({}) => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <nav className="header--menu">
            {LIST_MENU.map((item, index) => (
                <Link key={index} href={item.href}>
                    {t(`menu.${item.name}`)}
                </Link>
            ))}
        </nav>
    );
};

export default MenuHeader;
