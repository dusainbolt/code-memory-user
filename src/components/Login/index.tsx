import AntImage from '@Common/Image';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { Box } from '@Common/Layout';
import { staticPath } from '@Utils/func';
import { Card, Divider, Typography } from 'antd';
import { FC, useCallback } from 'react';
import { LoginForm } from './LoginForm';

export const LoginComponent: FC<any> = () => {
    const { t } = useTranslation();

    const handleSubmitLogin = useCallback(values => {
        console.log(values);
    }, []);
    return (
        <Box className="login__page">
            <Card className="login__card">
                <Box className="login__content">
                    <AntImage wrapperClassName="center-block" alt="Logo login CodeMemoery" src={staticPath('/images/logo_header.webp')} />
                    <Typography.Paragraph className="login__description title-3 txt-center mt-20">{t('login.description')}</Typography.Paragraph>
                    <Typography.Paragraph className="txt-center">
                        {t('login.question_acc')}
                        <Typography.Link href="/" className="high-light ml-4 txt-action">
                            {t('login.register_now')}
                        </Typography.Link>
                    </Typography.Paragraph>
                    <LoginForm submitLogin={handleSubmitLogin} />
                </Box>
            </Card>
        </Box>
    );
};
