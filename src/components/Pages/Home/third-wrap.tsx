import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import ImageWrapper from '@Common/ImageWrapper';
interface _ThirdWrap {
    // title: string;
    // text: string;
}

const ThirdWrap: React.FC<_ThirdWrap> = ({}) => {
    const sizeImageService = { width: 195, height: 183 };

    return (
        <Box className="third-wrap__container" container>
            <Row className="third-wrap__card-wrap">
                <Col md={12} xxl={4}>
                    <Box className="third-wrap__card-item">
                        <ImageWrapper {...sizeImageService} center alt="img-content-banner-1" src="/images/service_1.png" />
                        <Typography center weight={700} type="h3" className="third-wrap__card-title-service">
                            Product Design
                        </Typography>
                        <Typography center weight={400} type="p" className="third-wrap__card-description-service">
                            We all love to share our wins. It;s a lot harder to share our failures. Behind every success there are often a lot{' '}
                        </Typography>
                    </Box>
                </Col>
                <Col md={12} xxl={4}>
                    <Box className="third-wrap__card-item active">
                        <ImageWrapper {...sizeImageService} center alt="img-content-banner-2" src="/images/service_2.png" />
                        <Typography center weight={700} type="h3" className="third-wrap__card-title-service">
                            Product Design
                        </Typography>
                        <Typography center weight={400} type="p" className="third-wrap__card-description-service">
                            It's through mistakes that you actually can grow you get rid of everything that is not essential to makihave to get bad.
                        </Typography>
                    </Box>
                </Col>
                <Col md={12} xxl={4}>
                    <Box className="third-wrap__card-item">
                        <ImageWrapper {...sizeImageService} center alt="img-content-banner-3" src="/images/service_3.png" />
                        <Typography center weight={700} type="h3" className="third-wrap__card-title-service">
                            Product Design
                        </Typography>
                        <Typography center weight={400} type="p" className="third-wrap__card-description-service">
                            We all love to share our wins. It;s a lot harder to share our failures. Behind every success there are often a lot
                        </Typography>
                    </Box>
                </Col>
            </Row>
        </Box>
    );
};

export default ThirdWrap;
