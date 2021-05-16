import { Box } from '@Common/Layout';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { VIEW_SCREEN_WIDTH } from '@Config/contains';
import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

interface _NewsWrap {}

const NewsWrap: React.FC<_NewsWrap> = ({}) => {
    const { t } = useTranslation();
    const [slidePerView, setSlidePerView] = useState<number>(4);

    useEffect(() => {
        if(VIEW_SCREEN_WIDTH.xs > window.innerWidth){
            setSlidePerView(1);
        }else if(window.innerWidth < VIEW_SCREEN_WIDTH.xl && window.innerWidth > VIEW_SCREEN_WIDTH.lg){
            setSlidePerView(4);
        }else if( window.innerWidth <= VIEW_SCREEN_WIDTH.lg &&  window.innerWidth > VIEW_SCREEN_WIDTH.md){
            setSlidePerView(3);
        }
        else if(window.innerWidth <= VIEW_SCREEN_WIDTH.md && window.innerWidth > VIEW_SCREEN_WIDTH.xs){
            setSlidePerView(2);
        }else if(window.innerWidth < VIEW_SCREEN_WIDTH.xxl) {
            setSlidePerView(4);
        }
    }, []);

    return (
        <Box container className="news--container">
            <Swiper
                slidesPerView={slidePerView}
                spaceBetween={30}
                className="news--swiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default NewsWrap;
