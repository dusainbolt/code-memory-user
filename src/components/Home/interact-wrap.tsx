import AntImage from '@Common/Image';
import { Box } from '@Common/Layout';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { staticPath } from '@Utils/func';
import { Col, Row, Space, Typography } from 'antd';

// interface _InteractWrap {}

const InteractWrap: React.FC<any> = ({}) => {
    const { t } = useTranslation();

    const DATA_INTERACTIVE_INTRODUCE = [
        {
            title: t('home.txt_title_share'),
            description: t('home.txt_description_share'),
            imageUrl: '/images/interact_share.webp',
            fade: { fadeLeftComponent: true },
        },
        {
            title: t('home.txt_title_learn'),
            description: t('home.txt_description_learn'),
            imageUrl: '/images/interact_learn.webp',
            fade: { fadeInComponent: true },
        },
        {
            title: t('home.txt_title_talk'),
            description: t('home.txt_description_talk'),
            imageUrl: '/images/interact_talk.webp',
            fade: { fadeRightComponent: true },
        },
    ];

    return (
        <Box className="home-interact--container" container>
            <Typography.Text id="interact" className="home--title title txt-center">
                {t('home.txt_title_interact')}
            </Typography.Text>
            <Box className="home-interact--box">
                <Row gutter={[40, 40]} className="home-interact--row">
                    {DATA_INTERACTIVE_INTRODUCE.map((item, index) => (
                        <Col className="home-interact--card" key={index} md={24} lg={8}>
                            <Space direction="vertical">
                                <AntImage alt={`${t('home.txt_title_interact')} ${item.title}`} src={staticPath(item.imageUrl)} />
                                <Typography.Title className="title-1 txt-center mt-24" level={3}>
                                    {item.title}
                                </Typography.Title>
                                <Typography.Paragraph className="txt-dec-1 txt-center">{item.description}</Typography.Paragraph>
                            </Space>
                        </Col>
                    ))}
                </Row>
            </Box>
        </Box>
    );
};

export default InteractWrap;
