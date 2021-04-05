import Image from 'next/image';
import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
interface _ThirdWrap {
    // title: string;
    // text: string;
}

const ThirdWrap: React.FC<_ThirdWrap> = ({}) => {
    return (
        <Box className="third-wrap__container" container>
            <Row className="third-wrap__card-wrap">
                <Col md={12} xxl={4}>
                    ssd
                </Col>
                <Col md={12} xxl={4}>
                    ssd
                </Col>
                <Col md={12} xxl={4}>
                    ssd
                </Col>
            </Row>
        </Box>
    );
};

export default ThirdWrap;
