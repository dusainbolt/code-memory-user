import { memo } from 'react';
import Image from 'next/image';
import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import Button from '@Common/Button';
interface _Banner {
    // title: string;
    // text: string;
}

const Banner: React.FC<_Banner> = ({}) => {
    return (
        <Box className="banner">
            <Box className="banner__background_image_fix">
                <Image alt="banner__background_image_fix" width={1322} quality={85} height={708} src="/images/bgBannerFix.png" />
            </Box>
            <Row container className="banner__container">
                <Col xs={12} xsOrder={2} xl={5}>
                    <Box className="banner__info-wrap">
                        <Typography className="banner__title" type="h1">
                            Xin chào mình là Du
                        </Typography>
                        <Typography className="banner__description">
                            Increase productivity with simple to-do app. app to manage your personal budgets.
                        </Typography>
                        <Button mTopBottom={38} label={'Hire Us Today'} width={206} round />
                    </Box>
                </Col>
                <Col xs={12} xsOrder={1} xl={7}>
                    <Image width={787} quality={85} height={637} src="/images/imgBanner.png" />
                </Col>
            </Row>
        </Box>
    );
};

export default memo(Banner);
