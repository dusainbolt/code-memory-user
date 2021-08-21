import { Input } from 'antd';
import { FieldInputProps, FieldMetaProps, FormikState } from 'formik';
import { FC } from 'react';
import Box from '@Common/Box';
interface IInputComponent {
    label?: string;
    prefix?: any;
    suffix?: any;
    placeholder?: string;
    className?: string;
    passwordMode?: boolean;
    field: FieldInputProps<any>;
    form: FormikState<any>;
    meta: FieldMetaProps<any>;
}

export const InputComponent: FC<IInputComponent> = ({
    field,
    form: { touched: formTouched, errors: formErrors },
    label = '',
    prefix = null,
    suffix = null,
    placeholder = '',
    passwordMode = false,
    className = '',
    ...props
}) => {
    const touched = formTouched[field.name];
    const errorMessage = formErrors[field.name];
    const InputCommon = passwordMode ? Input.Password : Input;
    return (
        <Box className="field-wrap">
            {label && <label className="field-wrap__label">{label}</label>}
            <InputCommon className={`app-input ${className}`} placeholder={placeholder} prefix={prefix} suffix={suffix} {...field} {...props} />
            {errorMessage && touched && <span className="required">{errorMessage}</span>}
        </Box>
    );
};
