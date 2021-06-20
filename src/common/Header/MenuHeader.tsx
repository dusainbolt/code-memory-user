import useTranslation from '@Common/LanguageProvider/useTranslation';

export const LIST_MENU = [
    { name: 'txt_home', href: '/' },
    { name: 'txt_blog', href: '/blog' },
    { name: 'txt_about', href: '/about' },
    { name: 'txt_contact', href: '/contact' },
    { name: 'txt_services', href: '/service' },
];

const MenuHeader: React.FC<any> = ({}) => {
    const { t } = useTranslation();

    return (
        <nav className="header--menu">
            {LIST_MENU.map((item, index) => (
                <a key={index} className="m-lr-16" href={item.href}>
                    {t(`menu.${item.name}`)}
                </a>
            ))}
        </nav>
    );
};

export default MenuHeader;