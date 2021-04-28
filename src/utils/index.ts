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
    'flb-col': props.flexCol,
    [`flb-al-${props.alignItem}`]: props.alignItem,
    [`flb-jt-${props.justify}`]: props.justify,
    'cir': props.circle,
    'fxd': props.fixed,
    'rel': props.relative,
    'hv': props.hover,
    'center-block': props.centerBlock,
    'fade fade-in': props.fadeInComponent,
    'fade fade-right': props.fadeRightComponent,
    'fade fade-down': props.fadeDownComponent,
    'fade fade-left': props.fadeLeftComponent,
    'full-w': props.fullWidth,
    [`b-${props.bottom}`]: props.bottom,
    [`t-${props.top}`]: props.top,
    [`l-${props.left}`]: props.left,
    [`r-${props.right}`]: props.right,
    [`a-d-${props.delay}`]: props.delay,
    [`al-${props.align}`]: props.align,
    [`w-${props.width}`]: props.width,
    [`h-${props.height}`]: props.height,
    [`mhp-${props.minHeightPercent}`]: props.minHeightPercent,
    [`mi-w-${props.minWidth}`]: props.minWidth,
    [`ma-w-${props.maxWidth}`]: props.maxWidth,
    [`m-tb-${props.mCol}`]: props.mCol,
    [`m-lr-${props.mRow}`]: props.mRow,
    [`m-${props.margin}`]: props.margin,
    [`p-tb-${props.pCol}`]: props.pCol,
    [`p-lr-${props.pRow}`]: props.pRow,
    [`p-${props.padding}`]: props.padding,
    [`f-sz-${props.fontSize}`]: props.fontSize,
    [`f-${props.fontWeight}`]: props.fontWeight,
    [`lh-${props.lineHeight}`]: props.lineHeight,
    [`op-${props.opacity}`]: props.opacity,
    [`op-${props.opacity}`]: props.opacity,
    [`mt-${props.mt}`]: props.mt,
    [`mr-${props.mr}`]: props.mr,
    [`mb-${props.mb}`]: props.mb,
    [`ml-${props.ml}`]: props.ml,
    [`pt-${props.pt}`]: props.pt,
    [`pr-${props.pr}`]: props.pr,
    [`pb-${props.pb}`]: props.pb,
    [`pl-${props.pl}`]: props.pl,
    [`color-${props.color}`]: props.color,
    [`bg-${props.background}`]: props.background,
    [`br-${props.radius}`]: props.radius,
    [props.className]: props.className,
})
