import LazyImage from '../LazyImage';
import { Link } from '@I18n/index';
import { TFunction } from 'next-i18next';
import { memo } from 'react';
import Image from 'next/image'

const ImageFixBanner = require("@Public/images/bgBannerFix.png?webp");

interface _Banner {
    title: string;
    text: string;
    readonly t: TFunction;
}


const Banner: React.FC<_Banner> = ({ title, text, t }) => {
    return (
        <div className="home-banner">
            <div className="home-banner__bg-banner">
            {/* <picture>
    <source srcSet={require('@Public/images/bgBannerFix.png?webp')} type="image/webp" />
    <source srcSet={require('@Public/images/bgBannerFix.png')} type="image/jpeg" />
    <img src={require('@Public/images/bgBannerFix.png')} />
  </picture> */}
        <Image
        src={ImageFixBanner}
        alt="Picture of the author"
        width={500}
        height={500}
      />
                {/* <img src={ImageFixBanner} alt="image-fix-banner"/> */}
            </div>
            {/* <div className="banner__content">
                <h1 className="banner__title">{title}</h1>
                <p className="banner__text">{text}</p>
                <div className="banner__btn">
                    <Link href="/academy">
                        <a className="banner__join">Join the academy</a>
                    </Link>
                    <Link href="/course">
                        <a className="banner__course">See all course</a>
                    </Link>
                </div>
            </div> */}
            {/* <div className="home-banner__img">
                <LazyImage
                    largeSrc="https://i.imgur.com/F0zhRWn.png"
                    smallSrc="https://i.imgur.com/BDYBIwP.png"
                />
            </div> */}
        </div>
    );
};

export default memo(Banner);
