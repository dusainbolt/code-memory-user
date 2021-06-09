import useTranslation from '@Components/LanguageProvider/useTranslation';
import { LIST_MENU } from '@Config/contains';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface _MenuHeader {}

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
