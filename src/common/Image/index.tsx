import clsx from 'clsx';
import { Image, ImageProps } from 'antd';

export interface _AntImage extends ImageProps {
  loadUrl?: string;
}

const AntImage: React.FC<_AntImage> = ({ className, preview = false, loadUrl, ...props }) => {
  return (
    <Image
      className={clsx(className, 'img-app-antd')}
      preview={preview}
      {...props}
      placeholder={loadUrl ? <Image className={clsx(className, 'img-app-antd', 'img-app-antd-load')} preview={false} src={loadUrl} /> : false}
    />
  );
};

export default AntImage;
