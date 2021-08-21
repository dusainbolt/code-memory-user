import Box from '@Common/Box';
import { Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const BoxWellComePage: FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  const { t } = useTranslation();
  return (
    <Box className="card-blog box-welcome-page mb-20">
      <Title level={1} className="title-1">
        {t(title)}
      </Title>
      <Typography.Paragraph className="txt-dec-nor">{t(description)}</Typography.Paragraph>
    </Box>
  );
};

export default BoxWellComePage;
