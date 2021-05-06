import Image from 'next/image';
import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import Button from '@Common/Button';
import { useEffect, useState } from 'react';
import useTranslation from '@Components/LanguageProvider/useTranslation';
interface _Banner {
    // title: string;
    // text: string;
}

const Banner: React.FC<_Banner> = ({}) => {
    const { t } = useTranslation();
    const myTitle = "CodeMemory";
    useEffect(() => {
        let countChar = 0;
        const typeWriter = () => {
            if (countChar < myTitle.length) {
                document.getElementsByClassName("banner--title")[0].innerHTML += myTitle.charAt(countChar);
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
                        <Typography fontWeight="bold" className="banner--title" type="h1">
                        </Typography>
                        <Typography fontWeight="medium" className="banner--description">
                        Đơn giản là chia sẻ, học hỏi, trao đổi về lĩnh vực IT. Hy vọng mình sẽ đem đến cái nhìn chân thưc, sự đam mê và thích thú về lĩnh vực này tới cho các bạn.
                        </Typography>
                        <Button link href="#second" mCol={38} label="Xem tiếp" width={206} round />
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
