import { Box } from '@Common/Layout';
import { FC } from 'react';
import { Formik, Field } from 'formik';
import { InputComponent } from '@Common/Input';
import ButtonCommon from '@Common/Button';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import GoogleLogin from 'react-google-login';
import getConfig from 'next/config';

export interface LoginInput {
    credential: string;
    password: string;
}

interface ILoginForm {
    submitLogin: (values: LoginInput) => void | Promise<any>;
}

const {
    publicRuntimeConfig: { GOOGLE_CLIENT_ID },
} = getConfig();

export const LoginForm: FC<ILoginForm> = ({ submitLogin }) => {
    const { t } = useTranslation();
    const initialValues: LoginInput = { credential: '', password: '' };

    const responseGoogle = response => {
        console.log(response);
    };
    console.log(GOOGLE_CLIENT_ID);
    return (
        <Formik initialValues={initialValues} onSubmit={submitLogin}>
            {({ handleSubmit }) => (
                <Box className="login__form mt-30">
                    <GoogleLogin
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        // cookiePolicy={'single_host_origin'}
                    />
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
                    <ButtonCommon>{t('common')}</ButtonCommon>
                </Box>
            )}
        </Formik>
    );
};
