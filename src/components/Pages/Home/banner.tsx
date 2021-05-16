import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import Button from '@Common/Button';
import { useEffect } from 'react';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { styleButtonViewNextHome, styleTitleBanner, styleDescriptionBanner, styleImageBanner, styleBannerInfoWrap } from './style';
import { DEFAULT_SEO } from '@Components/Meta';
import ImageWrapper from '@Common/ImageWrapper';
import { staticPath } from '@Utils/index';

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
        <Box mt={30} className="banner">
            <Row container className="banner--container">
                <Col md={12} mdOrder={2} xxl={5}>
                    <Box className="banner--info-wrap" {...styleBannerInfoWrap}>
                        <Typography className="banner--title" {...styleTitleBanner}></Typography>
                        <Typography className="banner--description" {...styleDescriptionBanner}>
                            {t('home.txt_description_banner_1')}
                            <Typography hightLight type="b">
                                {t('home.txt_description_banner_2')}
                            </Typography>
                            {t('home.txt_description_banner_3')}
                        </Typography>
                        <Button href="#second" className="banner--button-next-view" {...styleButtonViewNextHome}>
                            {t('common.txt_view_next')}
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </Button>
                    </Box>
                </Col>
                <Col md={12} mdOrder={1} xxl={7} fadeInComponent>
                    <Box className="banner--img-content-banner">
                        <ImageWrapper  {...styleImageBanner} src={staticPath('/images/img_banner.png')} />
                    </Box>
                </Col>
            </Row>
        </Box>
    );
};

export default Banner;
