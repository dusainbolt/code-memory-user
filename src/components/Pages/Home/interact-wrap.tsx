import AntImage from '@Common/Image';
import { Box } from '@Common/Layout';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { staticPath } from '@Utils/index';
import { Col, Row, Space, Typography } from 'antd';

interface _InteractWrap {}

const InteractWrap: React.FC<_InteractWrap> = ({}) => {
    const { t } = useTranslation();

    const DATA_INTERACTIVE_INTRODUCE = [
        {
            title: t('home.txt_title_share'),
            description: t('home.txt_description_share'),
            imageUrl: '/images/interact_share.png',
            fade: { fadeLeftComponent: true },
        },
        {
            title: t('home.txt_title_learn'),
            description: t('home.txt_description_learn'),
            imageUrl: '/images/interact_learn.png',
            fade: { fadeInComponent: true },
        },
        {
            title: t('home.txt_title_talk'),
            description: t('home.txt_description_talk'),
            imageUrl: '/images/interact_talk.png',
            fade: { fadeRightComponent: true },
        },
    ];

    return (
        <Box className="home-interact--container" container>
            <Typography.Text id="interact" className="home--title">
                {t('home.txt_title_interact')}
            </Typography.Text>
            <Box className="home-interact--box">
                <Row gutter={[40, 40]} className="home-interact--row">
                    {DATA_INTERACTIVE_INTRODUCE.map((item, index) => (
                        <Col className="home-interact--card" key={index} md={24} lg={8}>
                            <Space direction="vertical">
                                <AntImage alt={`${t('home.txt_title_interact')} ${item.title}`} src={staticPath(item.imageUrl)} />
                                <Typography.Title level={3}>{item.title}</Typography.Title>
                                <Typography.Paragraph>{item.description}</Typography.Paragraph>
                            </Space>
                        </Col>
                    ))}
                </Row>
            </Box>
        </Box>
    );
};

export default InteractWrap;
