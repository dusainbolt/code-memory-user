import type { NextApiRequest, NextApiResponse } from 'next';

export type _indexState = {
    count: number;
    todos: [];
};

export type _ctxApp = {
    pathname: string; //  Current route. That is the path of the page in /pages
    query: any; // Query string section of URL parsed as an object
    asPath: any; // String of the actual path (including the query) shown in the browser
    req: NextApiRequest; // HTTP request object (server only)
    res: NextApiResponse; // HTTP response object (server only)
    err: any; // Error object if any error is encountered during the rendering
};

export type _styleLayout = {
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    fullWidth?: boolean;
    flexCol?: boolean;
    alignItem?: string;
    mCol?: number;
    height?: number;
    minHeightPercent?: number;
    mRow?: number;
    pCol?: number;
    pRow?: number;
    padding?: number;
    margin?: number;
    fontSize?: number;
    fontWeight?: string;
    lineHeight?: number;
    className?: string;
    opacity?: number;
    flexBox?: boolean;
    justify?: string;
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    pt?: number;
    pr?: number;
    pb?: number;
    pl?: number;
    hover?: boolean;
    color?: string;
    centerBlock?: boolean;
    align?: string;
    background?: string;
    radius?: number;
    fadeInComponent?: boolean;
    fadeRightComponent?: boolean;
    fadeDownComponent?: boolean;
    fadeLeftComponent?: boolean;
};
