import { _styleLayout } from '@Config/models';
import { _getStyleLayout } from '@Utils/index';
import clsx from 'clsx';
export interface _Typography extends _styleLayout {
    type?: string;
    className?: string;
    children?: any;
    textCenter?: boolean;
    idProps?: object;
}

const Typography: React.FC<_Typography> = ({ type, textCenter, idProps = {}, children,... props }) => {
    const styles = clsx({ 'app-typography': true, 'text-center': textCenter, ..._getStyleLayout(props) });
    
    const getTypography = {
        h1: <h1 {...idProps} className={styles}>{children}</h1>,
        h2: <h2  {...idProps} className={styles}>{children}</h2>,
        h3: <h3  {...idProps} className={styles}>{children}</h3>,
        h4: <h4  {...idProps} className={styles}>{children}</h4>,
        h5: <h5  {...idProps} className={styles}>{children}</h5>,
        h6: <h6  {...idProps} className={styles}>{children}</h6>,
        span: <span  {...idProps} className={styles}>{children}</span>,
        default: <p  {...idProps} className={styles}>{children}</p>,
    };

    return getTypography[type] || getTypography['default'];
};

export default Typography;
