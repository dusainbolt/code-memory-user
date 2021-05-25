export const staticPath = (path: string = '') => {
    return `..${path}`;
};

export const isEmptyObj = (pbj: object = {}) => {
    return Object.keys(pbj).length === 0 && pbj.constructor === Object;
};
