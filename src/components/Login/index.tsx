import AntImage from '@Common/Image';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { Box } from '@Common/Layout';
import { staticPath } from '@Utils/func';
import { Card, Typography } from 'antd';
import { FC } from 'react';

export const LoginComponent: FC<any> = () => {
    const { t } = useTranslation();

    return (
        <Box className="login__page">
            <Card className="login__card">
                <AntImage wrapperClassName="login__logo-wrap" alt="Logo login CodeMemoery" src={staticPath('/images/logo_header.webp')} />
                <Typography.Paragraph className="login__description">{t('login.description')}</Typography.Paragraph>
                <Typography.Paragraph>
                    {t('login.question_acc')}
                    <Typography.Text>{t('login.register_now')}</Typography.Text>
                </Typography.Paragraph>
            </Card>
        </Box>
    );
};
