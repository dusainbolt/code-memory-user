import Box from '@Common/Box';
import ButtonCommon from '@Common/Button';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { staticPath } from '@Utils/func';
import { Col, Row, Space } from 'antd';
import { Typography } from 'antd';
import AntImage from '@Common/Image';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-reveal';
import { useAppSelector } from '@Redux/store';
import { getSeoHomeSlice } from '@Redux/slices/seoHomeSlice';

const HomeBanner: React.FC<any> = () => {
  const { t } = useTranslation(['common']);
  const seoHome = useAppSelector(getSeoHomeSlice);

  return (
    <Box container className="home-banner mt-30">
      <Row gutter={30}>
        <Col xs={{ span: 24, order: 2 }} lg={{ span: 10, order: 1 }} className="home-banner--wrap-info">
          <Fade left>
            <Space direction="vertical">
              <Typography.Title className="home-banner__title">{seoHome.siteName}</Typography.Title>
              <Typography.Paragraph className="home-banner--description txt-dec-1 mt-20">
                {t('home.txt_description_banner_1')}
                <Typography.Text className="high-light">{t('home.txt_description_banner_2')}</Typography.Text>
                {t('home.txt_description_banner_3')}
              </Typography.Paragraph>
            </Space>
            <Typography.Link className="home-banner--button-link" href="#interact">
              <ButtonCommon type="primary" shape="round" fontAWS={faAngleDoubleDown} className="home-banner--button-next-view">
                {t('common.txt_view_next')}
              </ButtonCommon>
            </Typography.Link>
          </Fade>
        </Col>
        <Col xs={{ span: 24, order: 1 }} lg={{ span: 14, order: 2 }}>
          <Fade right>
            <AntImage alt="Ảnh banner của CodeMemory" className="home-banner--img-content" src={staticPath('/images/img_banner.webp')} />
          </Fade>
        </Col>
      </Row>
    </Box>
  );
};

export default HomeBanner;
