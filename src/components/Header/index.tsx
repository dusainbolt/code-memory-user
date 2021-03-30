// import { Link } from '@I18n/index';
// import HomeMenu from '@Common/Menu/HomeMenu';
import HomeMenu from '@Common/Menu/HomeMenu';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import BGBanner from '@Public/svg/bgBanner.svg';

interface _Header {}

const Header: React.FC<_Header> = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = e => {
        const scrollHeight = e.target.documentElement.scrollTop;
        // top > 0 || top = 0
        if ((!scrollTop && scrollHeight) || !scrollHeight) {
            setScrollTop(scrollHeight);
        }
        //not remove setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`header-wrapper ${!scrollTop ? '' : 'scrolling'}`}>
            <div className="app-container">
                <Link href="/">
                    <a className="hello">
                        <Image
                            alt="logo"
                            width={140}
                            height={55}
                            src="https://sainboltapp.web.app/static/media/LogoSidebar.53b25a64.png"
                            className="header__logo"
                        />
                    </a>
                </Link>
                <HomeMenu />
            </div>
        </header>
    );
};

export default Header;
