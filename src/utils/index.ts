export const _tValue = (_tText: string, params: object = {}) => {
    const arrPrams = Object.keys(params);
    if(arrPrams.length){
        arrPrams.forEach(key => {
            _tText = _tText.replace(`{{${key}}}`, params[key]);
        });
    }
    return _tText;
};
