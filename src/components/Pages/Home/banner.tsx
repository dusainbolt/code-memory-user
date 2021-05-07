import Image from 'next/image';
import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import Button from '@Common/Button';
import { useEffect, useState } from 'react';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { styleButtonViewNextHome } from './style';
interface _Banner {
    // title: string;
    // text: string;
}

const Banner: React.FC<_Banner> = ({}) => {
    const { t } = useTranslation();
    const myTitle = 'CodeMemory';
    useEffect(() => {
        let countChar = 0;
        const titlePage = document.getElementsByClassName('banner--title')[0];
        titlePage.innerHTML = "";
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
        <Box className="banner">
            <Box className="banner--background_image_fix"></Box>
            <Row container className="banner--container">
                <Col md={12} mdOrder={2} xxl={5}>
                    <Box className="banner--info-wrap">
                        <Typography fontWeight="bold" className="banner--title" type="h1"></Typography>
                        <Typography mt={30} fontWeight="medium" className="banner--description">
                            Điểm đến của sự chia sẻ, học hỏi, trao đổi trong lĩnh vực lập trình. Hy vọng mình sẽ đem đến cái nhìn chân thưc, sự đam mê
                            và thích thú về lĩnh vực này tới cho các bạn.
                        </Typography>
                        <Button href="#second" className="banner--button-next-view" {...styleButtonViewNextHome} >
                            Xem tiếp <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </Button>
                    </Box>
                </Col>
                <Col md={12} mdOrder={1} xxl={7} fadeInComponent>
                    <Box className="banner--img-content-banner">
                        <Image width={764} alt="img-content-banner" quality={85} height={393} src="/images/img_banner.png" />
                    </Box>
                </Col>
            </Row>
        </Box>
    );
};

export default Banner;
