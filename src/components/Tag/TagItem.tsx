import Box from '@Common/Box';
import TagCommon from '@Common/Tag';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const TagItem: FC<{
  tag: any;
  level: any;
  scrollPosition: any;
}> = ({ scrollPosition, level, tag }) => {
  return (
    <Box className="tag-content__item flx-center spacing mt-16">
      <Box className="tag-info-wrap flx-center align-left">
        <LazyLoadImage
          effect="blur"
          alt={'hello'}
          scrollPosition={scrollPosition}
          src={'https://cdn.hashnode.com/res/hashnode/image/upload/v1607082785538/EryuLRriM.png?w=200&h=200&fit=crop&crop=entropy&auto=compress'}
          className="tag-thumbnail"
          width={46}
          height={46}
        />
        <Paragraph className="tag-info ml-8">
          <Title className="tag-name title-small" level={level}>
            Javascript
          </Title>
          <Paragraph className="txt-dec-light">
            Danh sách được cập nhật hàng ngày vào lúc nửa đêm theo giờ PST. Danh sách được cập nhật hàng ngày vào lúc nửa đêm theo giờ PST.
          </Paragraph>
        </Paragraph>
      </Box>
      <TagCommon className="bg-primary" label="190 bai viet" href={'/tag'} />
    </Box>
  );
};

export default TagItem;
