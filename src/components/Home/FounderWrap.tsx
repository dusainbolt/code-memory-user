import AntImage from '@Common/Image';
import { Box } from '@Common/Layout';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { staticPath } from '@Utils/func';
import { Col, Divider, Row, Typography } from 'antd';

// interface _FounderWrap {}

const FounderWrap: React.FC<any> = ({}) => {
    const { t } = useTranslation();

    return (
        <Box className="home-founder--container" container>
            <Box className="home-founder--wrap p-tb-30 p-lr-20">
                <Row gutter={32} className="home-founder--row">
                    <Col xs={24} lg={12}>
                        <AntImage alt="Avatar Founder CodeMemory - Lê Huy Du (Du Sainbolt)" src={staticPath('/images/avatar_home_page.webp')} />
                    </Col>
                    <Col className="home-founder--content" xs={24} lg={12}>
                        <Typography.Title level={4}>{t('home.txt_title_founder')}</Typography.Title>
                        <Typography.Paragraph className="home-founder--name">{t('home.txt_name_founder')}</Typography.Paragraph>
                        <Typography.Text className="home-founder--mission">{t('home.txt_mission_founder')}</Typography.Text>
                        <Divider />
                        <Typography.Paragraph className="txt-dec-light-1 italic mb-16">{t('home.txt_letter_para_1')}</Typography.Paragraph>
                        <Typography.Paragraph className="txt-dec-light-1 italic mb-16">{t('home.txt_letter_para_2')}</Typography.Paragraph>
                        <AntImage alt="Chữ ký của founder" src={staticPath('/images/dusainbolt-autograph.png')} />
                    </Col>
                </Row>
            </Box>
        </Box>
    );
};

export default FounderWrap;
