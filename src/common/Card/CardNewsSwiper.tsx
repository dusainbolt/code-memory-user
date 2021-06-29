import { Box } from '@Common/Box';
import Avatar from 'antd/lib/avatar/avatar';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay } from 'swiper';
import AntImage from '@Common/Image';
import { Tag, Typography } from 'antd';

export const BREAK_SIZE_SCREEN_PRODUCER = {
    0: {
        slidesPerView: 1,
    },
    576: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 2,
    },
    1366: {
        slidesPerView: 4,
    },
};

const SwiperSlideNewsItem: React.FC<any> = ({ children, className, slidesPerView, ...props }) => {
    SwiperCore.use([Autoplay]);

    const swiperCommon = (
        <SwiperSlide className="home-news--item">
            <AntImage
                alt="thumbnail-new"
                src="https://appdu-storage.s3-ap-southeast-1.amazonaws.com/118005360_928999227584443_8060562362571425079_o.png"
            />
            <Box className="p-tb-12 p-lr-22">
                <Typography.Text className="home-news--item-created-date">April 30th, 2021 · 3 View</Typography.Text>
                <Typography.Title level={4} ellipsis={{ rows: 2 }} className="home-news--item-title">
                    Key Takeaways for Designers from Figma's Config 2021 Virtual Conference 213432 2134231 42134 231 4213 4 3214 1234 213 4321 4
                </Typography.Title>
                <Typography.Paragraph ellipsis={{ rows: 3 }} className="txt-dec-light">
                    Zero To Mastery's Lead Designer, Laura, discusses her key takeaways for Designers from Figma's recent virtual conference - Config
                    2021.
                </Typography.Paragraph>

                <Box className="home-news--box-wrap-author mt-14 mb-6">
                    <Avatar size={36} alt="avatar-blog" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Typography.Text className="home-news--author-name ml-4">Du Sainbolt</Typography.Text>
                    {/* <Rate className="app-rate" allowHalf disabled defaultValue={2.5} /> */}
                </Box>
                <Tag className="app-tag">Lập trình</Tag>
                <Tag className="app-tag">Lập trình</Tag>
                <Tag className="app-tag">Lập trình</Tag>
                <Tag className="app-tag">Lập trình</Tag>
                <Tag className="app-tag">Lập trình</Tag>
            </Box>
        </SwiperSlide>
    );

    return (
        <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            breakpoints={BREAK_SIZE_SCREEN_PRODUCER}
            loop={true}
            // slidesPerView={7}
            spaceBetween={16}
            className="home-news--swiper">
            {swiperCommon}
            {swiperCommon}
            {swiperCommon}
            {swiperCommon}
        </Swiper>
    );
};

export default SwiperSlideNewsItem;
