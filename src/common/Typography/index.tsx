import { _styleLayout } from '@Config/models';
import { _getStyleLayout } from '@Utils/index';
import clsx from 'clsx';
interface _Typography extends _styleLayout {
    type?: string;
    className?: string;
    children?: any;
    textCenter?: boolean;
}

const Typography: React.FC<_Typography> = ({ type, textCenter, children,... props }) => {
    const styles = clsx({ 'app-typography': true, 'text-center': textCenter, ..._getStyleLayout(props) });
    
    const getTypography = {
        h1: <h1 className={styles}>{children}</h1>,
        h2: <h1 className={styles}>{children}</h1>,
        h3: <h1 className={styles}>{children}</h1>,
        h4: <h1 className={styles}>{children}</h1>,
        h5: <h1 className={styles}>{children}</h1>,
        h6: <h1 className={styles}>{children}</h1>,
        span: <span className={styles}>{children}</span>,
        default: <p className={styles}>{children}</p>,
    };

    return getTypography[type] || getTypography['default'];
};

export default Typography;
