import Image from 'next/image';
import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import Button from '@Common/Button';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface _Banner {
    // title: string;
    // text: string;
}

const Banner: React.FC<_Banner> = ({}) => {
    return (
        <Box className="banner">
            <Box className="banner__background_image_fix"></Box>
            <Row container className="banner__container">
                <Col md={12} mdOrder={2} xxl={5}>
                    <Box className="banner__info-wrap">
                        <Typography fontWeight="bold" className="banner__title" type="h1">
                            Xin chào mình là Du
                        </Typography>
                        <Typography fontWeight="medium" className="banner__description">
                            Increase productivity with simple to-do app. app to manage your personal budgets.
                        </Typography>
                        <Button mCol={38} label={'Hire Us Today'} width={206} round />
                    </Box>
                </Col>
                <Col md={12} mdOrder={1} xxl={7} fadeInComponent>
                    <Box className="banner__img-content-banner">
                        <Image width={787} alt="img-content-banner" quality={85} height={637} src="/images/img_banner.png" />
                    </Box>
                </Col>
            </Row>
        </Box>
    );
};

export default Banner;
