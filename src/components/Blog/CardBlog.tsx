import Box from '@Common/Box';
import TagCommon from '@Common/Tag';
import { PopoverCardBlog } from '@Common/Popover/popoverCardBlog';
import { Avatar, Typography } from 'antd';
import { FC } from 'react';
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardBlog: FC<any> = ({ scrollPosition, blog }) => {
  return (
    <Box className="card-blog blog-item mt-16">
      <LazyLoadImage
        effect="blur"
        // placeholderSrc=""
        alt={'hello'}
        scrollPosition={scrollPosition}
        src={blog.thumbnailUrl}
        className="blog-item__image"
      />
      <Box className="blog-item__content ml-12">
        <Typography.Title className="blog-item__title title-2 mb-10" ellipsis={{ rows: 2 }} level={3}>
          <a href="/">
            Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM
            Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương
          </a>
        </Typography.Title>
        <Typography.Paragraph className="txt-dec-light blog-item__description" ellipsis={{ rows: 2 }}>
          Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc
          RDNA2 của AMD phát triển trong tháng 0
        </Typography.Paragraph>
        <Typography.Paragraph className="tag-wrap-expand" ellipsis={{ expandable: true }}>
          <TagCommon className="mr-10 mt-10" label="lap trinh" href="/" />
          <TagCommon className="mr-10" label="lap trinh" href="/" />
          <TagCommon className="mr-10" label="lap trinh" href="/" />
          <TagCommon className="mr-10" label="lap trinh" href="/" />
          <TagCommon className="mr-10" label="lap trinh" href="/" />
          <TagCommon className="mr-10" label="lap trinh" href="/" />
          <TagCommon label="lap trinh" href="/" />
        </Typography.Paragraph>
        <Box className="blog-item__info-create flx-center align-left mt-14">
          <a>
            <Avatar size={40} alt="avatar-blog" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </a>
          <Typography.Paragraph className="create-info ml-4">
            <Typography.Link className="txt-user-name mb-4" href="/">
              Du Sainbolt
            </Typography.Link>
            <Typography.Link className="txt-dec-gray" href="/">
              Jun 28, 2021
            </Typography.Link>
          </Typography.Paragraph>
          <Box className="blog-item__interact ml-24 flx-center">
            <Box className="interact-wrap flx-center align-left">
              <LikeOutlined />
              <Typography.Text className="interact-value mr-20">13</Typography.Text>
              <CommentOutlined />
              <Typography.Text className="interact-value">13</Typography.Text>
            </Box>
            <PopoverCardBlog />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardBlog;
