import clsx from 'clsx';
interface _Typography {
    type?: string;
    className?: string;
    children?: any;
    center?: boolean;
    weight?: number;
    width?: number;
    size?: number;
    lineHeight?: number;
}

const Typography: React.FC<_Typography> = ({ type, center, weight, children, width, className = '', size, lineHeight }) => {
    const styles = clsx('app-typography', className, { 'text-center': center });
    const stylesJSX = {
        fontWeight: weight,
        maxWidth: width && `${width}px`,
        fontSize: size && `${size}px`,
        lineHeight: lineHeight && `${lineHeight}px`,
    };

    const getTypography = {
        h1: (
            <h1 style={stylesJSX} className={styles}>
                {children}
            </h1>
        ),
        h2: (
            <h1 style={stylesJSX} className={styles}>
                {children}
            </h1>
        ),
        h3: (
            <h1 style={stylesJSX} className={styles}>
                {children}
            </h1>
        ),
        h4: (
            <h1 style={stylesJSX} className={styles}>
                {children}
            </h1>
        ),
        h5: (
            <h1 style={stylesJSX} className={styles}>
                {children}
            </h1>
        ),
        h6: (
            <h1 style={stylesJSX} className={styles}>
                {children}
            </h1>
        ),
        span: (
            <span style={stylesJSX} className={styles}>
                {children}
            </span>
        ),
        default: (
            <p style={stylesJSX} className={styles}>
                {children}
            </p>
        ),
    };

    return getTypography[type] || getTypography['default'];
};

export default Typography;
