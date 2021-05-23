import { Box } from '@Common/Layout';
import Button from '@Common/Button';
import { useEffect } from 'react';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { DEFAULT_SEO } from '@Components/Meta';
import { staticPath } from '@Utils/index';
import { Col, Row, Space } from 'antd';
import { Typography } from 'antd';
import AntImage from '@Common/Image';
import Link from 'next/link';

interface _Banner {}

const Banner: React.FC<_Banner> = ({}) => {
    const { t } = useTranslation();
    const myTitle = DEFAULT_SEO.appName;
    useEffect(() => {
        let countChar = 0;
        const titlePage = document.getElementsByClassName('banner--title')[0];
        titlePage.innerHTML = '';
        const typeWriter = () => {
            if (countChar < myTitle.length) {
                titlePage.innerHTML += myTitle.charAt(countChar);
                countChar++;
                setTimeout(typeWriter, 60);
            }
        };
        typeWriter();
    }, []);

    return (
        <Box container className="banner">
            <Row gutter={30}>
                <Col md={{ span: 24, order: 2 }} lg={{ span: 10, order: 1 }} className="banner--wrap-info">
                    <Space direction="vertical">
                        <Typography.Title className="banner--title"></Typography.Title>
                        <Typography.Paragraph className="banner--description">
                            {t('home.txt_description_banner_1')}
                            <Typography.Text className="high-light">{t('home.txt_description_banner_2')}</Typography.Text>
                            {t('home.txt_description_banner_3')}
                        </Typography.Paragraph>
                        <Button type="primary" shape="round" fontAWS={faAngleDoubleDown} className="banner--button-next-view">
                            <Link href="#second">{t('common.txt_view_next')}</Link>
                        </Button>
                    </Space>
                </Col>
                <Col md={{ span: 24, order: 1 }} lg={{ span: 14, order: 2 }}>
                    <AntImage className="banner--img-content" src={staticPath('/images/img_banner.png')} />
                </Col>
            </Row>
        </Box>
    );
};

export default Banner;
