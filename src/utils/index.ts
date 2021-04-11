export const _tValue = (_tText: string, params: object = {}) => {
    const arrPrams = Object.keys(params);
    if(arrPrams.length){
        arrPrams.forEach(key => {
            _tText = _tText.replace(`{{${key}}}`, params[key]);
        });
    }
    return _tText;
};

export const _getStyleLayout = (props) => ({
    'flb': props.flexBox,
    'hv': props.hover,
    [`w-${props.width}`]: props.width,
    [`mi-w-${props.minWidth}`]: props.minWidth,
    [`ma-w-${props.maxWidth}`]: props.maxWidth,
    [`m-tb-${props.mCol}`]: props.mCol,
    [`m-lr-${props.mRow}`]: props.mRow,
    [`m-${props.margin}`]: props.margin,
    [`p-tb-${props.pTopBottom}`]: props.pTopBottom,
    [`p-lr-${props.pLeftRight}`]: props.pLeftRight,
    [`p-${props.padding}`]: props.padding,
    [`f-size-${props.fontSize}`]: props.fontSize,
    [`f-weight-${props.fontWeight}`]: props.fontWeight,
    [`lh-${props.lineHeight}`]: props.lineHeight,
    [`op-${props.opacity}`]: props.opacity,
    [`op-${props.opacity}`]: props.opacity,
    [`flb-jt-${props.justify}`]: props.justify,
    [`mt-${props.mt}`]: props.mt,
    [`mr-${props.mr}`]: props.mr,
    [`mb-${props.mb}`]: props.mb,
    [`ml-${props.ml}`]: props.ml,
    [props.className]: props.className,
})
