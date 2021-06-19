import { Box } from '@Common/Layout';
import { FC } from 'react';
import { Formik, Field } from 'formik';
import { InputComponent } from '@Common/Input';
import ButtonCommon from '@Common/Button';
import useTranslation from '@Common/LanguageProvider/useTranslation';

interface ILoginInput {
    credential: string;
    password: string;
}

interface ILoginForm {
    submitLogin: (values: ILoginInput) => void | Promise<any>;
}

export const LoginForm: FC<ILoginForm> = ({ submitLogin }) => {
    const { t } = useTranslation();
    const initialValues: ILoginInput = { credential: '', password: '' };
    return (
        <Formik initialValues={initialValues} onSubmit={submitLogin}>
            {({ handleSubmit }) => (
                <Box className="login__form mt-30">
                    <Box className="form__row">
                        <Field name="credential" label={t('login.credential')} placeholder={t('login.place_credential')} component={InputComponent} />
                    </Box>
                    <Box className="form__row">
                        <Field
                            name="password"
                            passwordMode
                            label={t('login.password')}
                            placeholder={t('login.password')}
                            component={InputComponent}
                        />
                    </Box>
                    <ButtonCommon />
                </Box>
            )}
        </Formik>
    );
};
