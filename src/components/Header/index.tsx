import HomeMenu from '@Common/Menu/HomeMenu';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
interface _Header {
}

const Header: React.FC<_Header> = ({ }) => {
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
        setTimeout(()=>{
            window.scroll({top: 0, left: 0, behavior: 'smooth'});
        }, 100)
    }, []);

    return (
        <header className={`header__wrapper ${scrollTop > 500 ? 'scrolling' : ''}`}>
            <div className="container header__container">
                <Link href="/">
                    <div className="header__logo">
                        <Image alt="logo" width={49} height={35} src="/images/logo.png" />
                    </div>
                </Link>
                <HomeMenu />
            </div>
        </header>
    );
};

export default Header;
