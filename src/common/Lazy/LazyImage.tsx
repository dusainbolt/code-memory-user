import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface _LazyImage {
    largeSrc: string;
    smallSrc: string;
}

//using when page many image or image first time
const LazyImage: React.FC<_LazyImage> = ({ largeSrc, smallSrc }) => {
    const [isSmallImageLoaded, loadSmallImage] = useState(false);
    const [isLargeImageLoaded, loadLargeImage] = useState(false);

    const smallImageClass = clsx('image-lazy--loading', isSmallImageLoaded && 'image-lazy--loaded');
    const largeImageClass = clsx(isLargeImageLoaded && 'image-lazy--loaded');

    // Define handle
    const handleSmallImageLoad = () => loadSmallImage(false);
    const handleLargeImageLoad = () => {
        loadLargeImage(true);
    };

    return (
        <div className="image-lazy--wrapper">
            {!isLargeImageLoaded && <Image src={smallSrc} className={smallImageClass} width={1440} height={870} onLoad={handleSmallImageLoad} />}
            <Image src={largeSrc} className={largeImageClass} width={1440} height={870} onLoad={handleLargeImageLoad} />
        </div>
    );
};

export default LazyImage;
