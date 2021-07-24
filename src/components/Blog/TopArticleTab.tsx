import Box from '@Common/Box';
import { FC } from 'react';
import { Tabs, Typography } from 'antd';
import { CrownFilled } from '@ant-design/icons';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { useState } from 'react';
import ListTopArticle from '@Components/Blog/ListTopArticle';
import CardBlog from '@Components/Blog/CardBlog';

const { TabPane } = Tabs;

const TIME_TOP = {
  aMonth: 'aMonth',
  threeMonth: 'threeMonth',
  sixMonth: 'sixMonth',
};

const listTab = ['1M', '3M', '6M'];

const TopArticleTab: FC<any> = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState(TIME_TOP.aMonth);
  const onChangeTab = key => {
    setActiveKey(key);
  };
  return (
    <Box className="top-article card-blog p-0">
      <Box className="title-wrap p-20">
        <Typography.Title className="title-2" level={3}>
          <CrownFilled className="mr-4" />
          {t('blog.top_blog')} - <Typography.Text className="sub-title">{t(`blog.${activeKey}`)}</Typography.Text>
        </Typography.Title>
      </Box>
      <Tabs onTabClick={onChangeTab} activeKey={activeKey} className="app-tab">
        <TabPane tab="1M" key={TIME_TOP.aMonth}>
          <ListTopArticle />
          <ListTopArticle />
        </TabPane>
        <TabPane tab="3M" key={TIME_TOP.threeMonth}>
          2M
        </TabPane>
        <TabPane tab="6M" key={TIME_TOP.sixMonth}>
          2M
        </TabPane>
      </Tabs>
    </Box>
  );
};

export default TopArticleTab;
