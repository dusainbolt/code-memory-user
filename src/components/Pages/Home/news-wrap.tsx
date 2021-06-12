import { Box } from '@Common/Layout';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import SwiperSlideNewsItem from '@Common/Card/CardNewsSwiper';
import { _RootState } from '@Redux/reducer/_rootReducer';
import { Typography } from 'antd';

interface _NewsWrap {}

const NewsWrap: React.FC<_NewsWrap> = ({}) => {
    const { t } = useTranslation();
    return (
        <Box container className="home-news--container">
            <Typography.Text className="home--title">{t('home.title_service')}</Typography.Text>
            <SwiperSlideNewsItem />
        </Box>
    );
};

export default NewsWrap;
