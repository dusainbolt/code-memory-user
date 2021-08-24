import Box from '@Common/Box';
import TagCommon from '@Common/Tag';
import { Tag } from '@Models/TagModel';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import Link from 'next/link';
import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const TagItem: FC<{
  level: any;
  scrollPosition: any;
  tag: Tag;
}> = ({ scrollPosition, level, tag }) => {
  return (
    <Box className="tag-content__item flx-center spacing p-lr-4 p-tb-8 mb-2">
      <Link href="/tag">
        <a>
          <Box className="tag-info-wrap flx-center align-left">
            <LazyLoadImage
              effect="blur"
              alt={'hello'}
              scrollPosition={scrollPosition}
              src={tag.thumbnail}
              className="tag-thumbnail"
              width={46}
              height={46}
            />
            <Paragraph className="tag-info ml-8">
              <Title className="tag-name title-small" level={level}>
                {tag.title}
              </Title>
              <Paragraph className="txt-dec-light ellipsis">{tag.description}</Paragraph>
            </Paragraph>
          </Box>
        </a>
      </Link>
      <TagCommon className="bg-primary" label="190 bai viet" href={'/tag'} />
    </Box>
  );
};

export default TagItem;
