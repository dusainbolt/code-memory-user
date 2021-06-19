import { Box } from '@Common/Layout';
import ButtonCommon from '@Common/Button';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { DEFAULT_SEO } from '@Common/Meta';
import { staticPath } from '@Utils/func';
import { Col, Row, Space } from 'antd';
import { Typography } from 'antd';
import AntImage from '@Common/Image';

// interface _HomeBanner {}

const HomeBanner: React.FC<any> = () => {
    const { t } = useTranslation();

    return (
        <Box container className="home-banner mt-30">
            <Row gutter={30}>
                <Col xs={{ span: 24, order: 2 }} lg={{ span: 10, order: 1 }} className="home-banner--wrap-info">
                    <Space direction="vertical">
                        <Typography.Title className="home-banner--title">{DEFAULT_SEO.appName}</Typography.Title>
                        <Typography.Paragraph className="home-banner--description mt-20">
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
                </Col>
                <Col xs={{ span: 24, order: 1 }} lg={{ span: 14, order: 2 }}>
                    <AntImage alt="Ảnh banner của CodeMemory" className="home-banner--img-content" src={staticPath('/images/img_banner.webp')} />
                </Col>
            </Row>
        </Box>
    );
};

export default HomeBanner;
