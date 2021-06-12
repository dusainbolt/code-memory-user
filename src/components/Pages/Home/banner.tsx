import { Box } from '@Common/Layout';
import ButtonCommon from '@Common/Button';
import { useEffect } from 'react';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { DEFAULT_SEO } from '@Components/Meta';
import { staticPath } from '@Utils/func';
import { Col, Row, Space } from 'antd';
import { Typography } from 'antd';
import AntImage from '@Common/Image';

interface _HomeBanner {}

const HomeBanner: React.FC<_HomeBanner> = ({}) => {
    const { t } = useTranslation();
    useEffect(() => {
        // let countChar = 0;
        // const titlePage = document.getElementsByClassName('home-banner--title')[0];
        // titlePage.innerHTML = '';
        // const typeWriter = () => {
        //     if (countChar < myTitle.length) {
        //         titlePage.innerHTML += myTitle.charAt(countChar);
        //         countChar++;
        //         setTimeout(typeWriter, 60);
        //     }
        // };
        // typeWriter();
    }, []);

    return (
        <Box container className="home-banner">
            <Row gutter={30}>
                <Col xs={{ span: 24, order: 2 }} lg={{ span: 10, order: 1 }} className="home-banner--wrap-info">
                    <Space direction="vertical">
                        <Typography.Title className="home-banner--title">{DEFAULT_SEO.appName}</Typography.Title>
                        <Typography.Paragraph className="home-banner--description">
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
                    <AntImage className="home-banner--img-content" src={staticPath('/images/img_banner.png')} />
                </Col>
            </Row>
        </Box>
    );
};

export default HomeBanner;
