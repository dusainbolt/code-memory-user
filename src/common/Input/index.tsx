import { Input } from 'antd';
import { FieldInputProps, FieldMetaProps, FormikState } from 'formik';
import { FC } from 'react';

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
    field: { name, value },
    form: { touched: formTouched, errors: formErrors },
    label = '',
    prefix = null,
    suffix = null,
    placeholder = '',
    passwordMode = false,
    className = '',
    ...props
}) => {
    const touched = formTouched[name];
    const errorMessage = formErrors[name];
    const InputCommon = passwordMode ? Input.Password : Input;
    return (
        <div className="field-wrap">
            {label && <label className="field-wrap__label">{label}</label>}
            <InputCommon className={`app-input ${className}`} placeholder={placeholder} prefix={prefix} suffix={suffix} {...props} />
            {errorMessage && touched && <span className="required">{errorMessage}</span>}
        </div>
    );
};
