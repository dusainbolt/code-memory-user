import Image from 'next/image';
import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import ImageWrapper from '@Common/ImageWrapper';
interface _FourthWrap {
    // title: string;
    // text: string;
}

const FourthWrap: React.FC<_FourthWrap> = ({}) => {
    return (
        <Row className="fourth-wrap" container>
            <Col md={12} xxl={5}>
                <Typography weight={700} lineHeight={30} type="h2" className="fourth-wrap__title-small">
                    About Us
                </Typography>
                <Typography weight={700} lineHeight={54} type="h2" className="fourth-wrap__title-large">
                    We Lead From The Front
                </Typography>
            </Col>
            <Col md={12} xxl={7}>
                <ImageWrapper width={795} height={498} alt="img-content-banner-3" src="/images/imgAbout.png" />
            </Col>
        </Row>
    );
};

export default FourthWrap;
