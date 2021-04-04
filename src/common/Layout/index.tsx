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
    xl: number;
    xsOrder?: number;
    smOrder?: number;
    mdOrder?: number;
    lgOrder?: number;
}

export const Col: React.FC<_Col> = ({ children, xs, sm, md, lg, xl, xsOrder, smOrder, mdOrder, lgOrder }) => {
    const colStyle = clsx({
        [`col_xs-${xs}`]: xs,
        [`col_sm-${sm}`]: sm,
        [`col_md-${md}`]: md,
        [`col_lg-${lg}`]: lg,
        [`col-${xl}`]: xl,
        [`order_xs-${xsOrder}`]: xs,
        [`order_sm-${smOrder}`]: sm,
        [`order_md-${mdOrder}`]: md,
        [`order_lg-${lgOrder}`]: lg,
    });
    return <div className={colStyle}>{children}</div>;
};

interface _Box {
    children: any;
    className: string;
}

export const Box: React.FC<_Box> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};
