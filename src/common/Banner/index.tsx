import { memo } from 'react';
import Image from 'next/image';
interface _Banner {
    // title: string;
    // text: string;
}

const Banner: React.FC<_Banner> = ({}) => {
    return (
        <div className="banner">
            <div className="banner__background_image_fix">
                <Image alt="banner__background_image_fix" width={1322} quality={100} height={708} src="/images/bgBannerFix.png" />
            </div>
 asdasdsad
        </div>
    );
};

export default memo(Banner);
