import { Box } from '@Common/Layout';
import Image from 'next/image';
import clsx from 'clsx';

interface _ImageWrapper {
    src: string;
    width?: number;
    height?: number;
    className?: string;
    quality?: number;
    alt?: string;
    center?: boolean;
}

const ImageWrapper: React.FC<_ImageWrapper> = ({ src, width, height, className, quality = 85, alt, center }) => {
    const boxStyle = clsx(className, 'img-app-wrap', { center: center });

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
