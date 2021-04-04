interface _Typography {
    type?: string;
    className?: string;
    children: any;
}

const Typography: React.FC<_Typography> = ({ type, children, className }) => {
    const getTypography = {
        h1: <h1 className={className}>{children}</h1>,
        h2: <h1 className={className}>{children}</h1>,
        h3: <h1 className={className}>{children}</h1>,
        h4: <h1 className={className}>{children}</h1>,
        h5: <h1 className={className}>{children}</h1>,
        h6: <h1 className={className}>{children}</h1>,
        default: <p className={className}>{children}</p>,
    };

    return getTypography[type] || getTypography['default'];
};

export default Typography;
