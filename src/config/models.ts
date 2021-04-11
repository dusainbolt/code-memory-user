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
    mCol?: number;
    height?: number;
    mRow?: number;
    pTopBottom?: number;
    pLeftRight?: number;
    padding?: number;
    margin?: number;
    fontSize?: number;
    fontWeight?: number;
    lineHeight?: number;
    className?: string;
    opacity?: number;
    flexBox?: boolean;
    justify?: string;
    mt?:number,
    mr?:number,
    mb?:number,
    ml?:number,
    hover?:boolean,
};
