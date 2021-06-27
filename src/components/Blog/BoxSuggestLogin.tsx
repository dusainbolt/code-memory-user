import { Box } from '@Common/Box';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { Typography } from 'antd';
import { FC } from 'react';

const BoxSuggesstLogin: FC<any> = () => {
    const { t } = useTranslation();
    return (
        <Box className="card-blog box-suggest-login">
            <Box className="box-suggest-login__content">
                <Typography.Paragraph>{t('blog.txt_suggest_login')}</Typography.Paragraph>
            </Box>
        </Box>
    );
};

export default BoxSuggesstLogin;
