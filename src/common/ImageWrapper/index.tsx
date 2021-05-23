import clsx from 'clsx';
import { Image, ImageProps } from 'antd';

export interface _ImageWrapper extends ImageProps {}

const ImageWrapper: React.FC<_ImageWrapper> = ({ className, ...props }) => {
    const boxStyle = clsx(className, 'img-app-wrap');

    const myLoader = ({ src, width, quality }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <Image
            width={200}
            preview={false}
            src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?`}
            placeholder={
                <Image
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    width={200}
                />
            }
        />
    );
};

export default ImageWrapper;
