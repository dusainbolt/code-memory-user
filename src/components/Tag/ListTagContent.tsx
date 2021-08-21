import Box from '@Common/Box';
import { Divider } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
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
  scrollPosition: any;
  title: string;
  description: string;
  level: number;
  icon?: ReactNode;
}> = ({ scrollPosition, icon, description, title, level }) => {
  const { t } = useTranslation();
  const data = [null, null, null, null, null, null, null, null, null, null];
  return (
    <Box className="tag-content card-blog">
      <Box className="tag-content__introduce">
        <Box className="text-content">
          <Title level={2} className="title-2">
            {t(title)}
          </Title>
          <Paragraph className="txt-dec-light"> {t(description)}</Paragraph>
        </Box>
        {icon}
      </Box>
      <Divider />
      {data.map((item, index) => (
        <TagItem key={index} tag={item} level={level} scrollPosition={scrollPosition} />
      ))}
    </Box>
  );
};

export default trackWindowScroll(ListTagContent);
