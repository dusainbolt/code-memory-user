import Image from 'next/image';
import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import ImageWrapper from '@Common/ImageWrapper';
import Button from '@Common/Button';
import ButtonIcon from '@Common/ButtonIcon';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
                <Typography weight={700} lineHeight={54} type="h3" className="fourth-wrap__title-large">
                    We Lead From The Front
                </Typography>
                <Typography weight={400} lineHeight={30} className="mt-36 mb-36">
                    We Lead From The Front They actually assured me over and over that take little time off and come back and work. Fast forward tow
                    weeks after we are going for a new project.
                </Typography>
                <Typography weight={400} lineHeight={30}>
                    I wrote to let them know ready to come back they kicked me of their team slack all of us are make company email.
                </Typography>
                <Box className="fourth-wrap__button-wrap">
                    <Button round width={206} height={60} label="Learn more" />
                    {/* <Button /> */}
                    <ButtonIcon icon={faBars} size={60} label={"Watch Video"}/>
                </Box>
            </Col>
            <Col md={12} xxl={7}>
                <ImageWrapper width={795} height={498} alt="img-content-banner-3" src="/images/imgAbout.png" />
            </Col>
        </Row>
    );
};

export default FourthWrap;
