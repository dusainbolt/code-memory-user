import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import ImageWrapper from '@Common/ImageWrapper';
import { staticPath } from '@Utils/index';

interface _FiveWrap {
    // title: string;
    // text: string;
}

const FiveWrap: React.FC<_FiveWrap> = ({}) => {
    return (
        <Row className="fourth-wrap" mb={100} container>
            <Col md={12} xxl={6} fadeLeftComponent>
                <ImageWrapper width={526} height={526} alt="img-content-banner-3" src={staticPath('/images/avatar_home_page.png')} />
            </Col>
            <Col md={12} xxl={6} fadeRightComponent>
                <Box flexBox minHeightPercent={90} flexCol alignItem="start">
                    <Typography fontWeight="bold" lineHeight={30} type="h2" className="fourth-wrap--title-small">
                        About Us
                    </Typography>
                    <Typography fontWeight="bold" lineHeight={54} type="h3" className="fourth-wrap--title-large">
                        We Lead From The Front
                    </Typography>
                    <Typography fontWeight="regular" lineHeight={30} fontSize={18} mCol={36}>
                        We Lead From The Front They actually assured me over and over that take little time off and come back and work. Fast forward tow
                        weeks after we are going for a new project.
                    </Typography>
                    <Typography fontWeight="regular" lineHeight={30} fontSize={18}>
                        I wrote to let them know ready to come back they kicked me of their team slack all of us are make company email.
                    </Typography>
                </Box>
            </Col>
        </Row>
    );
};

export default FiveWrap;
