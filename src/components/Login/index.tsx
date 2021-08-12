import { AlertCommon } from '@Common/Alert';
import Box from '@Common/Box';
import { LoginInput } from 'src/types/LoginModel';
import { useAppDispatch, useAppSelector } from '@Redux/store';
import { Card, Typography } from 'antd';
import { FC, useCallback, useEffect } from 'react';
import { LoginForm } from './LoginForm';
import { useTranslation } from 'react-i18next';
import { loginSliceStart } from '@Redux/slices/loginSlice';

export const LoginComponent: FC<any> = () => {
  const { t, i18n } = useTranslation(['common']);
  const dispatch = useAppDispatch();
  // const { messageError } = useAppSelector(store => store.loginReducer);
  const messageError: any = '';

  const handleSubmitLogin = useCallback((input: LoginInput) => {
    console.log('LOGIN SLICE');
    dispatch(loginSliceStart({ input }));
  }, []);

  useEffect(() => {
    // dispatch(actionLogin.postLogin({ credential: '123', password: '123213' }));
  }, []);

  // console.log('123213');
  return (
    <Box className="login__page">
      <Card className="login__card">
        <Box className="login__content">
          {/* <AntImage wrapperClassName="center-block" alt="Logo login CodeMemoery" src={staticPath('/images/logo_header.webp')} /> */}
          <Typography.Paragraph className="login__description title-3 txt-center">{t('login.description')}</Typography.Paragraph>
          <Typography.Paragraph className="txt-center">
            {t('login.question_acc')}
            <Typography.Link href="/" className="high-light ml-4 txt-action">
              {t('login.register_now')}
            </Typography.Link>
          </Typography.Paragraph>
          {messageError && <AlertCommon message={t(`message.${messageError}`)} />}
          <LoginForm submitLogin={handleSubmitLogin} />
        </Box>
      </Card>
    </Box>
  );
};
