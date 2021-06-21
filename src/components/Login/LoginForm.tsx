import { Box } from '@Common/Layout';
import { FC } from 'react';
import { Formik, Field } from 'formik';
import { InputComponent } from '@Common/Input';
import ButtonCommon from '@Common/Button';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import GoogleLogin from 'react-google-login';
import getConfig from 'next/config';
import * as Yup from 'yup';

export interface LoginInput {
    credential: string;
    password: string;
}

interface ILoginForm {
    submitLogin?: any;
}

const {
    publicRuntimeConfig: { GOOGLE_CLIENT_ID },
} = getConfig();

export const LoginForm: FC<ILoginForm> = ({ submitLogin }) => {
    const { t } = useTranslation();
    const initialValues: LoginInput = { credential: '', password: '' };
    const validateLoginInput = Yup.object({
        credential: Yup.string().required(t('txt.msg_required_unique_login')),
        password: Yup.string().required(t('txt.msg_required', { name: t('txt.val_password') })),
    });

    const responseGoogle = response => {
        console.log(response);
    };

    // const onSubmitInit = (values?: LoginInput) => {
    //     return values;
    // };

    return (
        <Formik initialValues={initialValues} onSubmit={submitLogin} validationSchema={validateLoginInput}>
            {({ handleSubmit }) => (
                <Box className="login__form mt-30">
                    <GoogleLogin clientId={GOOGLE_CLIENT_ID} buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} />
                    <Box className="form__row">
                        <Field
                            name="credential"
                            onPressEnter={handleSubmit}
                            label={t('login.credential')}
                            placeholder={t('login.place_credential')}
                            component={InputComponent}
                        />
                    </Box>
                    <Box className="form__row">
                        <Field
                            name="password"
                            passwordMode
                            onPressEnter={handleSubmit}
                            label={t('login.password')}
                            placeholder={t('login.password')}
                            component={InputComponent}
                        />
                    </Box>
                    <ButtonCommon onClick={handleSubmit} type="primary" shape="round">
                        {t('home.txt_btn_login')}
                    </ButtonCommon>
                </Box>
            )}
        </Formik>
    );
};
