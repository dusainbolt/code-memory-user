import clsx from 'clsx';
interface _Row {
    children: any;
    container?: boolean;
    className?: string;
}

export const Row: React.FC<_Row> = ({ children, container, className }) => {
    const rowStyle = clsx(
        'row',
        {
            container: container,
        },
        className
    );
    return <div className={rowStyle}>{children}</div>;
};

interface _Col {
    children: any;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    xsOrder?: number;
    smOrder?: number;
    mdOrder?: number;
    lgOrder?: number;
    xlOrder?: number;
}

export const Col: React.FC<_Col> = ({ children, xs, sm, md, lg, xl, xxl, xsOrder, smOrder, mdOrder, xlOrder, lgOrder }) => {
    const colStyle = clsx({
        [`col_xs-${xs}`]: xs,
        [`col_sm-${sm}`]: sm,
        [`col_md-${md}`]: md,
        [`col_lg-${lg}`]: lg,
        [`col_xl-${xl}`]: xl,
        [`col-${xxl}`]: xxl,
        [`order_xs-${xsOrder}`]: xs,
        [`order_sm-${smOrder}`]: sm,
        [`order_md-${mdOrder}`]: md,
        [`order_lg-${lgOrder}`]: lg,
        [`order_xl-${xlOrder}`]: xl,
    });
    return <div className={colStyle}>{children}</div>;
};

interface _Box {
    children?: any;
    className?: string;
    container?: boolean;
}

export const Box: React.FC<_Box> = ({ className, children, container }) => {
    const boxStyle = clsx({ container: container }, className);
    return <div className={boxStyle}>{children}</div>;
};

interface _Divider {
    gutter?: number;
    className?: string;
    width?: string;
    line?: boolean;
}

export const Divider: React.FC<_Divider> = ({ className, width, gutter, line }) => {
    return (
        <hr
            className={className}
            style={{
                width: '100%',
                maxWidth: width && `${width}px`,
                margin: `${gutter}px ${0}px`,
                opacity: line ? 1 : 0,
            }}
        />
    );
};
