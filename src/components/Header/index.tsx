import Button from '@Common/Button';
import { AppLink, Box, Nav } from '@Common/Layout';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { LIST_MENU } from '@Config/contains';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface _Header {}

const Header: React.FC<_Header> = ({}) => {
    const { t } = useTranslation();
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = e => {
        const scrollHeight = e.target.documentElement.scrollTop;
        // top > 0 || top = 0
        // if ((!scrollTop && scrollHeight) || !scrollHeight) {
        //     setScrollTop(scrollHeight);
        // }

        setScrollTop(scrollHeight);

        //not remove setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        setTimeout(() => {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }, 100);
    }, []);

    return (
        <header className={`header--wrapper ${scrollTop > 500 ? 'scrolling' : ''}`}>
            <Box className="container header--container">
                <Link href="/">
                    <Box className="header--logo">
                        <Image alt="logo" width={49} height={35} src="/images/logo.png" />
                    </Box>
                </Link>
                <Box className="menu--wrap">
                    <Nav flexBox className="menu--list">
                        {LIST_MENU.map((item, index) => (
                            <AppLink fontSize={16} mRow={22} fontWeight="bold" className="menu--link" key={index} href={item.href}>
                                {t(`menu.${item.name}`)}
                            </AppLink>
                        ))}
                    </Nav>
                    <Button label={'Contact'} width={150} minWidth={150} round />
                </Box>
            </Box>
        </header>
    );
};

export default Header;
