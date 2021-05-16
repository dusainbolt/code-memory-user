import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import ImageWrapper from '@Common/ImageWrapper';
import { staticPath } from '@Utils/index';
import { boxBoxStyleBox, styleAvatarFounder, styleFounderWrap, styleNameFounder, styleTitleFounder, styleMissionFounder, styleAutoGraph, styleContentLetter} from './style';
import useTranslation from '@Components/LanguageProvider/useTranslation';

interface _FounderWrap {}

const FounderWrap: React.FC<_FounderWrap> = ({}) => {
    const { t } = useTranslation();

    return (
        <Row className="founder-wrap" {...styleFounderWrap}>
            <Col md={12} xxl={6} fadeLeftComponent>
                <ImageWrapper {...styleAvatarFounder} src={staticPath('/images/avatar_home_page.png')} />
            </Col>
            <Col md={12} xxl={6} fadeRightComponent>
                <Box {...boxBoxStyleBox}>
                    <Typography {...styleTitleFounder}>
                        {t('home.txt_title_founder')}
                    </Typography>
                    <Typography {...styleNameFounder} className="founder-wrap--name">
                        {t('home.txt_name_founder')}
                    </Typography>
                    <Typography {...styleMissionFounder}>
                    {t('home.txt_mission_founder')}
                    </Typography>
                    <Typography {...styleContentLetter}>
                        " We Lead From The Front They actually assured me over and over that take little time off and come back and work. Fast forward
                        tow weeks after we are going for a new project.
                    </Typography>
                    <Typography {...styleContentLetter}>
                        I wrote to let them know ready to come back they kicked me of their team slack all of us are make company email..."
                    </Typography>
                    <ImageWrapper {...styleAutoGraph} src={staticPath('/images/dusainbolt-autograph.png')} />
                </Box>
            </Col>
        </Row>
    );
};

export default FounderWrap;
