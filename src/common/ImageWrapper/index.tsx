import { Box } from '@Common/Layout';
import Image from 'next/image';
import clsx from 'clsx';
import { _getStyleLayout } from '@Utils/index';
import { _styleLayout } from '@Config/models';

export interface _ImageWrapper {
    src?: string;
    width?: number;
    height?: number;
    className?: string;
    quality?: number;
    alt?: string;
    centerImg?: boolean;
    boxProps?: _styleLayout;
}

const ImageWrapper: React.FC<_ImageWrapper> = ({ src, width, height, className, quality = 85, alt, centerImg, boxProps = {}}) => {
    const boxStyle = clsx(className, 'img-app-wrap', { center: centerImg }, _getStyleLayout(boxProps));

    const myLoader = ({ src, width, quality }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <Box className={boxStyle}>
            <Image width={width} height={height} alt={alt} quality={quality} src={src} />
        </Box>
    );
};

export default ImageWrapper;
