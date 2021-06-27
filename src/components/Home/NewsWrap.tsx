import { Box } from '@Common/Box';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import SwiperSlideNewsItem from '@Common/Card/CardNewsSwiper';
import { Typography } from 'antd';

// interface _NewsWrap {}

const NewsWrap: React.FC<any> = ({ }) => {
    const { t } = useTranslation();
    return (
        <Box container className="home-news--container">
            <Typography.Text className="home--title title txt-center">{t('home.title_new_wrap')}</Typography.Text>
            <SwiperSlideNewsItem />
        </Box>
    );
};

export default NewsWrap;
