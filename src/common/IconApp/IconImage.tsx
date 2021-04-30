import { _styleLayout } from '@Config/models';
import clxs from 'clsx';
import { _getStyleLayout } from '@Utils/index';

interface _IconImage extends _styleLayout {
    round?: boolean;
    alt?: string;
    src?: string;
    imgWidth?: number;
    imgHeight?: number;
}

const IconImage: React.FC<_IconImage> = ({ round, alt, src, imgWidth, imgHeight,...props }) => {
    const styleIcon = clxs({
        ..._getStyleLayout(props),
        'app-icon icon-img': true,
        'icon-round': round,
    });
    return (
        <span className={styleIcon}>
            <img width={imgWidth} height={imgHeight} alt={alt} src={src} />
        </span>
    );
};

export default IconImage;
