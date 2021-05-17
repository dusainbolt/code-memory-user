import ImageWrapper from '@Common/ImageWrapper';
import { Box } from '@Common/Layout';
import Typography from '@Common/Typography';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { VIEW_SCREEN_WIDTH } from '@Config/contains';
import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';

interface _NewsWrap {}

const NewsWrap: React.FC<_NewsWrap> = ({}) => {
    const { t } = useTranslation();
    const [slidePerView, setSlidePerView] = useState<number>(4);

    useEffect(() => {
        if (VIEW_SCREEN_WIDTH.xs > window.innerWidth) {
            setSlidePerView(1);
        } else if (window.innerWidth <= VIEW_SCREEN_WIDTH.xl && window.innerWidth > VIEW_SCREEN_WIDTH.lg) {
            setSlidePerView(3);
        } else if (window.innerWidth <= VIEW_SCREEN_WIDTH.lg && window.innerWidth > VIEW_SCREEN_WIDTH.md) {
            setSlidePerView(3);
        } else if (window.innerWidth <= VIEW_SCREEN_WIDTH.md && window.innerWidth > VIEW_SCREEN_WIDTH.xs) {
            setSlidePerView(2);
        } else if (window.innerWidth < VIEW_SCREEN_WIDTH.xxl) {
            setSlidePerView(4);
        }
    }, []);

    const swiper = (
        <SwiperSlide className="news--item">
            <ImageWrapper
                imageNormal
                className="news--box-image"
                alt="title-news"
                src="https://appdu-storage.s3-ap-southeast-1.amazonaws.com/118005360_928999227584443_8060562362571425079_o.png"
            />
            <Box className="news--box-content" padding={22}>
                <Typography fontSize={14}>
                    April 30th, 2021 <span> · </span> 3 View
                </Typography>
                <Typography type="h5" fontWeight="bold" mCol={10} fontSize={18}>
                    Key Takeaways for Designers from Figma's Config 2021 Virtual Conference
                </Typography>
                <Typography>
                    Zero To Mastery's Lead Designer, Laura, discusses her key takeaways for Designers from Figma's recent virtual conference - Config
                    2021.
                </Typography>
            </Box>
        </SwiperSlide>
    );

    return (
        <Box container className="news--container">
            <Swiper slidesPerView={slidePerView} spaceBetween={16} className="news--swiper">
                {swiper}
                {swiper}
                {swiper}
                {swiper}
                {swiper}
                {swiper}
                {swiper}
                {swiper}
                {swiper}
                {swiper}
                {swiper}

            </Swiper>
        </Box>
    );
};

export default NewsWrap;
