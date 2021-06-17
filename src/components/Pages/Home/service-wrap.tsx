import ButtonCommon from '@Common/Button';
import AntImage from '@Common/Image';
import { Box } from '@Common/Layout';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { staticPath } from '@Utils/func';
import { Col, Divider, Row, Space, Typography } from 'antd';

// interface _ServiceWrap {}

const ServiceWrap: React.FC<any> = ({}) => {
    const { t } = useTranslation();

    const DATA_SERVICE = [
        {
            title: t('menu.txt_blog'),
            description: t('home.service_blog_description'),
            link: '',
            labelButton: t('home.txt_btn_view_blog'),
            urlImage: '/images/service_blog.png',
            imageAlignLeft: true,
        },
        {
            title: t('home.txt_title_course_service'),
            description: t('home.service_course_service_description'),
            link: '',
            labelButton: t('home.txt_btn_view_course'),
            urlImage: '/images/service_course.png',
            imageAlignLeft: false,
        },
        {
            title: t('home.txt_title_forum_service'),
            description: t('home.service_talk_description'),
            link: '',
            labelButton: t('home.txt_btn_view_forum'),
            urlImage: '/images/service_forum.png',
            imageAlignLeft: true,
        },
        {
            title: t('home.txt_title_develop_service'),
            description: t('home.service_develop_service_description'),
            link: '',
            labelButton: t('home.txt_btn_view_develop'),
            urlImage: '/images/service_develop.png',
            imageAlignLeft: false,
        },
    ];

    return (
        <Box className="home-service--container" container>
            <Typography.Text className="home--title">{t('home.title_service')}</Typography.Text>
            {DATA_SERVICE.map((item, index) => {
                return (
                    <Row gutter={[40, 40]} key={index} className="home-service--row">
                        <Divider />
                        <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: item.imageAlignLeft ? 1 : 2 }}>
                            <AntImage alt={item.title} src={staticPath(item.urlImage)} />
                        </Col>
                        <Col className="home-service--content" xs={{ span: 24, order: 2 }} lg={{ span: 12, order: item.imageAlignLeft ? 2 : 1 }}>
                            <Space direction="vertical">
                                <Typography.Title level={2}>{item.title}</Typography.Title>
                                <Typography.Paragraph>{item.description}</Typography.Paragraph>
                            </Space>
                            <Typography.Link className="home-service--button-link" href={item.link}>
                                <ButtonCommon className="home-service--button" type="primary" shape="round">
                                    {item.labelButton}
                                </ButtonCommon>
                            </Typography.Link>
                        </Col>
                    </Row>
                );
            })}
            <Divider />
        </Box>
    );
};

export default ServiceWrap;
