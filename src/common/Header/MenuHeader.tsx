import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import clsx from 'clsx';

export const LIST_MENU = [
  { name: 'txt_home', href: '/' },
  { name: 'txt_blog', href: '/blog' },
  { name: 'txt_forum', href: '/forum' },
  { name: 'txt_course', href: '/course' },
  { name: 'txt_services', href: '/service' },
];

const MenuHeader: React.FC<any> = ({}) => {
  const { t } = useTranslation(['common']);

  const router = useRouter();

  return (
    <nav className="header__menu">
      {LIST_MENU.map((item, index) => (
        <Link key={index} href={item.href}>
          <a className={clsx('m-lr-16', item.href === router.pathname && 'active')}> {t(`menu.${item.name}`)}</a>
        </Link>
      ))}
    </nav>
  );
};

export default MenuHeader;
