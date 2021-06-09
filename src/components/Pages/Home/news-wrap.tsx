import { Box } from '@Common/Layout';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { VIEW_SCREEN_WIDTH } from '@Config/contains';
import { useEffect, useState } from 'react';
import SwiperSlideNewsItem from '@Common/Card/CardNewsSwiper';
import { _RootState } from '@Redux/reducer/_rootReducer';
import { resize } from '@Redux/reducer/layoutReducer';
import { Typography } from 'antd';

interface _NewsWrap {}

const NewsWrap: React.FC<_NewsWrap> = ({}) => {
  const { t } = useTranslation();
  //   const [slidePerView, setSlidePerView] = useState<number>(4);

  //   useEffect(() => {
  //     window.addEventListener('resize', onResize);
  //   }, []);

  //   const onResize = () => {
  //     if (VIEW_SCREEN_WIDTH.xs > window.innerWidth) {
  //       setSlidePerView(1);
  //     } else if (window.innerWidth <= VIEW_SCREEN_WIDTH.xl && window.innerWidth > VIEW_SCREEN_WIDTH.lg) {
  //       setSlidePerView(3);
  //     } else if (window.innerWidth <= VIEW_SCREEN_WIDTH.lg && window.innerWidth > VIEW_SCREEN_WIDTH.md) {
  //       setSlidePerView(3);
  //     } else if (window.innerWidth <= VIEW_SCREEN_WIDTH.md && window.innerWidth > VIEW_SCREEN_WIDTH.xs) {
  //       setSlidePerView(2);
  //     } else if (window.innerWidth < VIEW_SCREEN_WIDTH.xxl) {
  //       setSlidePerView(4);
  //     }
  //     resize(window.innerWidth);
  //   };

  return (
    <Box container className="home-news--container">
      <Typography.Text className="home--title">{t('home.title_service')}</Typography.Text>
      <SwiperSlideNewsItem />
    </Box>
  );
};

export default NewsWrap;
