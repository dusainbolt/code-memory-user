import { Box, Col, Row } from '@Common/Layout';
import Typography from '@Common/Typography';
import ImageWrapper from '@Common/ImageWrapper';
import { staticPath } from '@Utils/index';
import {
    boxBoxStyleBox,
    styleAvatarFounder,
    styleFounderWrap,
    styleNameFounder,
    styleTitleFounder,
    styleMissionFounder,
    styleAutoGraph,
    styleContentLetter,
} from './style';
import useTranslation from '@Components/LanguageProvider/useTranslation';

interface _FounderWrap {}

const FounderWrap: React.FC<_FounderWrap> = ({}) => {
    const { t } = useTranslation();

    return (
        <Box container>
            <Row className="founder-wrap" fadeInComponent {...styleFounderWrap}>
                <Col md={12} xxl={6}>
                    <ImageWrapper {...styleAvatarFounder} src={staticPath('/images/avatar_home_page.png')} />
                </Col>
                <Col md={12} xxl={6}>
                    <Box {...boxBoxStyleBox} className="founder-wrap--letter">
                        <Typography {...styleTitleFounder}>{t('home.txt_title_founder')}</Typography>
                        <Typography {...styleNameFounder} className="founder-wrap--name">
                            {t('home.txt_name_founder')}
                        </Typography>
                        <Typography {...styleMissionFounder}>{t('home.txt_mission_founder')}</Typography>
                        <Typography {...styleContentLetter} mt={20}>
                            {t('home.txt_letter_para_1')}
                        </Typography>
                        <Typography {...styleContentLetter} mt={8}>
                            {t('home.txt_letter_para_2')}
                        </Typography>
                        <ImageWrapper {...styleAutoGraph} src={staticPath('/images/dusainbolt-autograph.png')} />
                    </Box>
                </Col>
            </Row>
        </Box>
    );
};

export default FounderWrap;
