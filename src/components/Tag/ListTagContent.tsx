import Box from '@Common/Box';
import { Tag } from '@Models/TagModel';
import { Divider } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { FC, ReactNode } from 'react';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import TagItem from './TagItem';

/**
 * ListContentBlog Grid component
 * renders a ListContentBlog component for each blog contained in the data
 * @param {object} param - props
 * @return {object} ListContentBlogGrid component
 */
const ListTagContent: FC<{
  data: Tag[];
  scrollPosition: any;
  title: string;
  description: string;
  level: number;
  icon?: ReactNode;
  className: string;
}> = ({ scrollPosition, icon, description, title, level, className, data }) => {
  const { t } = useTranslation();
  return (
    <Box className={clsx('tag-content card-blog', className)}>
      <Box className="tag-content__introduce p-lr-20">
        <Box className="text-content">
          <Title level={2} className="title-2">
            {t(title)}
          </Title>
          <Paragraph className="txt-dec-light"> {t(description)}</Paragraph>
        </Box>
        {icon}
      </Box>
      <Divider />
      <Box className="tag-content__list-wrap p-lr-12">
        {data.map((item, index) => (
          <TagItem key={index} tag={item} level={level} scrollPosition={scrollPosition} />
        ))}
      </Box>
    </Box>
  );
};

export default trackWindowScroll(ListTagContent);
