import useTranslation from '@Common/LanguageProvider/useTranslation';
import Box from '@Common/Box';
import { actionLogin } from '@Redux/actionCreators/loginActionCreators';
import { useAppSelector } from '@Redux/store';
import { Card, Typography } from 'antd';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { LoginInput } from 'src/models/LoginModel';
import { LoginForm } from './LoginForm';
import { AlertCommon } from '@Common/Alert';
import { useEffect } from 'react';

export const LoginComponent: FC<any> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { messageError } = useAppSelector(store => store.loginReducer);

  const handleSubmitLogin = useCallback((values: LoginInput) => {
    dispatch(actionLogin.postLogin(values));
  }, []);

  useEffect(() => {
    dispatch(actionLogin.postLogin({ credential: '123', password: '123213' }));
  }, []);

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
