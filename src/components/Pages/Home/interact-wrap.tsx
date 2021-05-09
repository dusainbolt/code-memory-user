import ImageWrapper from '@Common/ImageWrapper';
import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { staticPath } from '@Utils/index';
import { styleCardInteract, styleInteractTitle, styleTitleWrapInteract, styleImageInteract, styleDescriptionInteract } from './style';

interface _InteractWrap {}

const InteractWrap: React.FC<_InteractWrap> = ({}) => {
    const { t } = useTranslation();

    const DATA_INTERACTIVE_INTRODUCE = [
        {
            title: t('home.txt_title_share'),
            description: t('home.txt_description_share'),
            imageUrl: '/images/service_2.png',
            alt: 'img-content-banner-1',
            fade: { fadeLeftComponent: true },
        },
        {
            title: t('home.txt_title_learn'),
            description: t('home.txt_description_learn'),
            imageUrl: '/images/service_2.png',
            alt: 'img-content-banner-1',
            fade: { fadeInComponent: true },
        },
        {
            title: t('home.txt_title_talk'),
            description: t('home.txt_description_talk'),
            imageUrl: '/images/service_3.png',
            alt: 'img-content-banner-1',
            fade: { fadeRightComponent: true },
        },
    ];

    return (
        <Box className="interact--container" container>
            <Typography idProps={{ id: 'second' }} className="interact--title-wrap" {...styleTitleWrapInteract}>
                {t('home.txt_title_interact')}
            </Typography>
            <Row className="interact--card-wrap">
                {DATA_INTERACTIVE_INTRODUCE.map((item, index) => (
                    <Col key={index} md={12} xxl={4}>
                        <Box className="interact--card-item active" {...styleCardInteract} {...item.fade}>
                            <ImageWrapper {...styleImageInteract} alt="img-content-banner-1" src={staticPath(item.imageUrl)} />
                            <Typography {...styleInteractTitle} className="interact--title">
                                {item.title}
                            </Typography>
                            <Typography {...styleDescriptionInteract} className="interact--description">
                                {item.description}
                            </Typography>
                        </Box>
                    </Col>
                ))}
            </Row>
        </Box>
    );
};

export default InteractWrap;