import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import ImageWrapper from '@Common/ImageWrapper';
import Button from '@Common/Button';
import { staticPath } from '@Utils/index';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import {
    styleColContentService,
    styleImageServiceItem,
    styleTitleServiceItem,
    styleDescriptionServiceItem,
    styleTitleServiceWrap,
    styleBoxButtonServiceItem,
    styleButtonServiceItem,
} from './style';

interface _ServiceWrap {}

const ServiceWrap: React.FC<_ServiceWrap> = ({}) => {
    const { t } = useTranslation();

    const DATA_SERVICE = [
        {
            title: 'We Lead From The Front',
            description:
                'We Lead From The Front They actually assured me over and over that take little time off and come back and work. Fast forward tow weeks after we are going for a new project.',
            link: '',
            alt: '',
            labelButton: '',
            urlImage: staticPath('/images/img_about.png'),
            imageAlignLeft: true,
        },
        {
            title: 'We Lead From The Front',
            description:
                'We Lead From The Front They actually assured me over and over that take little time off and come back and work. Fast forward tow weeks after we are going for a new project.',
            link: '',
            alt: '',
            labelButton: '',
            urlImage: staticPath('/images/img_about.png'),
            imageAlignLeft: false,
        },
    ];

    return (
        <Box className="service-wrap" container>
            <Typography {...styleTitleServiceWrap}>{t('home.title_service')}</Typography>
            {DATA_SERVICE.map((item, index) => {
                let orderConfig: any = {
                    wrapText: {
                        xlOrder: item.imageAlignLeft ? 1 : 2,
                        fadeRightComponent: !item.imageAlignLeft,
                        fadeLeftComponent: item.imageAlignLeft,
                    },
                    wrapImage: {
                        xlOrder: item.imageAlignLeft ? 2 : 1,
                        fadeRightComponent: item.imageAlignLeft,
                        fadeLeftComponent: !item.imageAlignLeft,
                    },
                };
                return (
                    <Row key={index} mt={34}>
                        <Col md={12} xl={6} xxl={7} mdOrder={1} {...orderConfig.wrapImage}>
                            <ImageWrapper {...styleImageServiceItem} alt="img-content-banner-3" src={item.urlImage} />
                        </Col>
                        <Col md={12} xl={6} xxl={5} {...styleColContentService} {...orderConfig.wrapText}>
                            <Typography {...styleTitleServiceItem} className="service-wrap--title-large">
                                {item.title}
                            </Typography>
                            <Typography {...styleDescriptionServiceItem}>{item.description}</Typography>
                            <Box {...styleBoxButtonServiceItem}>
                                <Button {...styleButtonServiceItem}  label="Learn more" />
                                {/* <ButtonIcon hoverIcon spaceLabel={14} icon={faPlayCircle} fontSize={20} sizeIcon={60} label={'Watch Video'} /> */}
                            </Box>
                        </Col>
                    </Row>
                );
            })}
        </Box>
    );
};

export default ServiceWrap;
