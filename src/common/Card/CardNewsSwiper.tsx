import ImageWrapper from '@Common/ImageWrapper';
import { Box } from '@Common/Layout';
import RateCommon from '@Common/Rate';
import TagCommon from '@Common/Tag';
import Avatar from 'antd/lib/avatar/avatar';
import { Swiper, SwiperSlide } from 'swiper/react';

// export interface _SwiperSlideNewsItem extends RateProps {
//     className?: string;
// }

import SwiperCore, { Autoplay } from 'swiper';
import AntImage from '@Common/Image';
import { Space, Typography } from 'antd';

const SwiperSlideNewsItem: React.FC<any> = ({ children, className, slidesPerView, ...props }) => {
    SwiperCore.use([Autoplay]);

    const swiperCommon = (
        <SwiperSlide className="home-news--item">
            <AntImage alt="image-new" src="https://appdu-storage.s3-ap-southeast-1.amazonaws.com/118005360_928999227584443_8060562362571425079_o.png"/>
            <Box className="home-news--box-content">
                <Typography.Text className="home-news--item-created-date">
                    April 30th, 2021 · 3 View
                </Typography.Text>
                <Typography.Title level={4} ellipsis={{rows: 2}} className="home-news--item-title" >
                    Key Takeaways for Designers from Figma's Config 2021 Virtual Conference 213432 2134231 42134 231 4213 4 3214 1234 213 4321 4
                </Typography.Title>
                <Typography className="home-news--item-description">
                    Zero To Mastery's Lead Designer, Laura, discusses her key takeaways for Designers from Figma's recent virtual conference - Config
                    2021.
                </Typography>
                {/* <Typography fontWeight="light" className="news--item-description">
                    Zero To Mastery's Lead Designer, Laura, discusses her key takeaways for Designers from Figma's recent virtual conference - Config
                    2021.
                </Typography>
                <Box flexBox justify="start" mt={14} mb={6} className="news--box-wrap-author">
                    <Avatar size={36} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Typography ml={4} fontWeight="light" className="news--user-name-author">
                        Du Sainbolt
                    </Typography>
                    <RateCommon allowHalf defaultValue={2.5} />
                </Box> */}
                <TagCommon>Lập trình</TagCommon>
                <TagCommon>Lập trình</TagCommon>
                <TagCommon>Lập trình</TagCommon>

                <TagCommon>Lập trình</TagCommon>

                <TagCommon>Lập trình</TagCommon>
            </Box> 
        </SwiperSlide>
    );

    return (
        <Swiper autoplay={{ delay: 3000, disableOnInteraction: true }} loop={true} slidesPerView={slidesPerView} spaceBetween={16} className="home-news--swiper">
            {swiperCommon}
            {swiperCommon}
            {swiperCommon}
            {swiperCommon}
        </Swiper>
    );
};

export default SwiperSlideNewsItem;
