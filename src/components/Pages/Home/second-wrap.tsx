import ImageWrapper from '@Common/ImageWrapper';
import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import { styleCardInteract, styleInteractTitle, styleTitleWrapInteract, styleImageInteract, styleDescriptionInteract } from './style';
interface _SecondWrap {
    // title: string;
    // text: string;
}

const SecondWrap: React.FC<_SecondWrap> = ({}) => {
    const DATA_INTERACTIVE_INTRODUCE = [
        {
            title: '',
            description: '',
            imageUrl: '',
            alt: '',
            fade: { fadeLeftComponent: true },
        },
        {
            title: '',
            description: '',
            imageUrl: '',
            alt: '',
            fade: { fadeInComponent: true },
        },
        {
            title: '',
            description: '',
            imageUrl: '',
            alt: '',
            fade: { fadeRightComponent: true },
        },
    ];
    return (
        <Box className="interact--container" container>
            <Typography idProps={{ id: 'second' }} className="interact--title-wrap" {...styleTitleWrapInteract}>
                Provide Awesome Service With Our Tools
            </Typography>
            <Row className="interact--card-wrap">
                <Col md={12} xxl={4}>
                    <Box className="interact--card-item" {...styleCardInteract} fadeLeftComponent>
                        <ImageWrapper
                            {...styleImageInteract}
                            alt="img-content-banner-1"
                            src="https://d1.awsstatic.com/Solutions/Solutions%20Category%20Template%20Draft/Solution%20Architecture%20Diagrams/vod-on-aws-foundations-architecture.182b6790d313c884c84ccbe6d9c3a633da37cdd9.png"
                        />
                        <Typography {...styleInteractTitle} className="interact--title">
                            Chia sẻ
                        </Typography>
                        <Typography {...styleDescriptionInteract} className="interact--description">
                            We all love to share our wins. It;s a lot harder to share our failures. Behind every success there are often a lot{' '}
                        </Typography>
                    </Box>
                </Col>
                {/* <Col md={12} xxl={4}>
                    <Box className="interact--card-item active" {...styleCardInteract} fadeInComponent>
                        <ImageWrapper {...styleImageInteract} alt="img-content-banner-2" src="/images/service_2.png" />
                        <Typography {...styleInteractTitle} className="interact--title">
                            Học hỏi
                        </Typography>
                        <Typography {...styleDescriptionInteract} className="interact--description">
                            It's through mistakes that you actually can grow you get rid of everything that is not essential to makihave to get bad.
                        </Typography>
                    </Box>
                </Col>
                <Col md={12} xxl={4}>
                    <Box className="interact--card-item" {...styleCardInteract} fadeRightComponent>
                        <ImageWrapper {...styleImageInteract} alt="img-content-banner-3" src="/images/service_3.png" />
                        <Typography {...styleInteractTitle} className="interact--title">
                            Trao đổi
                        </Typography>
                        <Typography {...styleDescriptionInteract} className="interact--description">
                            We all love to share our wins. It;s a lot harder to share our failures. Behind every success there are often a lot
                        </Typography>
                    </Box>
                </Col> */}
            </Row>
        </Box>
    );
};

export default SecondWrap;
