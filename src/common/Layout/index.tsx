import { _styleLayout } from '@Config/models';
import { _getStyleLayout } from '@Utils/index';
import clsx from 'clsx';
import Link from 'next/link';
interface _Row extends _styleLayout {
    children: any;
    container?: boolean;
}

export const Row: React.FC<_Row> = ({ children, container, ...props }) => {
    const rowStyle = clsx({ row: true, container: container, ..._getStyleLayout(props) });
    return <div className={rowStyle}>{children}</div>;
};

export interface _Col extends _styleLayout {
    children?: any;
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

export const Col: React.FC<_Col> = ({ children, xs, sm, md, lg, xl, xxl, xsOrder, smOrder, mdOrder, xlOrder, lgOrder, ...props }) => {
    const colStyle = clsx({
        [`col_xs-${xs}`]: xs,
        [`col_sm-${sm}`]: sm,
        [`col_md-${md}`]: md,
        [`col_lg-${lg}`]: lg,
        [`col_xl-${xl}`]: xl,
        [`col-${xxl}`]: xxl,
        [`order_xs-${xsOrder}`]: xsOrder,
        [`order_sm-${smOrder}`]: smOrder,
        [`order_md-${mdOrder}`]: mdOrder,
        [`order_lg-${lgOrder}`]: lgOrder,
        [`order_xl-${xlOrder}`]: xlOrder,
        ..._getStyleLayout(props),
    });
    return <div className={colStyle}>{children}</div>;
};

export interface _Box extends _styleLayout {
    children?: any;
    className?: string;
    container?: boolean;
    onClick?: any;
}

export const Box: React.FC<_Box> = ({ children, onClick, container, ...props }) => {
    const boxStyle = clsx({ container: container, ..._getStyleLayout(props) });
    return (
        <div onClick={onClick} className={boxStyle}>
            {children}
        </div>
    );
};

export interface _Nav extends _styleLayout {
    children?: any;
    className?: string;
    container?: boolean;
    onClick?: any;
}

export const Nav: React.FC<_Nav> = ({ children, onClick, container, ...props }) => {
    const NavStyle = clsx({ container: container, ..._getStyleLayout(props) });
    return (
        <nav onClick={onClick} className={NavStyle}>
            {children}
        </nav>
    );
};

interface _Divider extends _styleLayout {
    line?: boolean;
}

export const Divider: React.FC<_Divider> = ({ line, ...props }) => {
    const boxStyle = clsx({ 'app-divider': true, show: line, ..._getStyleLayout(props) });
    return <hr className={boxStyle} />;
};

interface _List extends _styleLayout {}

export const List: React.FC<_List> = ({ children, ...props }) => {
    const boxStyle = clsx({ 'app-list': true, ..._getStyleLayout(props) });
    return <ul className={boxStyle}>{children}</ul>;
};
export interface _ListItem extends _styleLayout {}

export const ListItem: React.FC<_ListItem> = ({ children, ...props }) => {
    const boxStyle = clsx({ 'app-list-item': true, ..._getStyleLayout(props) });
    return <li className={boxStyle}>{children}</li>;
};

interface _AppLink extends _styleLayout {
    children?: any;
    href?: string;
    aTag?: boolean;
    rel?: string;
    target?: string;
}

export const AppLink: React.FC<_AppLink> = ({ aTag = false, target = '', href = '', children, rel, ...props }) => {
    const boxStyle = clsx({ 'app-link': true, ..._getStyleLayout(props) });
    const aElement = (
        <a rel={rel || children} target={target} className={boxStyle}>
            {children}
        </a>
    );
    return aTag ? aElement : <Link href={href}>{aElement}</Link>;
};
