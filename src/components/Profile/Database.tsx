import Box from '@Common/Box';
import AntImage from '@Common/Image';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { staticPath } from '@Utils/func';
import { Col, Row, Typography, Progress } from 'antd';
import { FC } from 'react';
import Zoom from 'react-reveal/Zoom';

export const DataBase: FC<any> = () => {
  // const { t } = useTranslation();
  const { t } = useTranslation();

  return (
    <Box className="profile__wrap mt-32">
      <Typography.Title className="title-wrap mb-16" level={3}>
        {t('profile.database')}
      </Typography.Title>
      <Row gutter={[14, 24]}>
        <Col xs={24} md={12} lg={8}>
          <Zoom>
            <Box className="flx-center profile__skill-info align-left">
              <AntImage className="img-skill mr-12" src={staticPath('/images/profile/mysql.png')} />
              <Box className="skill-info">
                <Typography.Paragraph>Mysql</Typography.Paragraph>
                <Progress percent={80} />
              </Box>
            </Box>
          </Zoom>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Zoom>
            <Box className="flx-center profile__skill-info align-left">
              <AntImage className="img-skill mr-12" src={staticPath('/images/profile/postgres.jpg')} />
              <Box className="skill-info">
                <Typography.Paragraph>Postgres</Typography.Paragraph>
                <Progress percent={60} />
              </Box>
            </Box>
          </Zoom>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Zoom>
            <Box className="flx-center profile__skill-info align-left">
              <AntImage className="img-skill mr-12" src={staticPath('/images/profile/mongodb.jpg')} />
              <Box className="skill-info">
                <Typography.Paragraph>Mongodb</Typography.Paragraph>
                <Progress percent={80} />
              </Box>
            </Box>
          </Zoom>
        </Col>
      </Row>
    </Box>
  );
};
