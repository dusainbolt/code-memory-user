import { Box } from '@Common/Layout';
import Typography from '@Common/Typography';
import { _getStyleLayout } from '@Utils/index';
import clsx from 'clsx';

function InputComponent({ field, form: { errors, touched }, message, classInput = '', disable, fieldType, boxProps, outline, fullWidth, ...props }) {
    const error = Boolean(message) || (touched[field.name] && Boolean(errors[field.name]));
    const textError = message || (touched[field.name] && errors[field.name]);
    const boxInputStyle = clsx({ form__app: true, ..._getStyleLayout(props), [`form__app-${fieldType}`]: fieldType });
    const inputStyle = clsx({ 'form__app--input': true, error: error, [classInput]: classInput, disable: disable, 'outline': outline });

    return (
        <Box {...boxProps} className={boxInputStyle}>
            <input className={inputStyle} {...field} {...props} />
            {error && <Typography type="span" fontWeight="light" className={`mess-error error-${field.name}`}>{textError}</Typography>}
        </Box>
    );
}

export default InputComponent;
