import Box from '@Common/Box';
import { FC } from 'react';
import BoxWellComePage from './BoxWellComePage';
import { Col, Row } from 'antd';
import ListTagContent from './ListTagContent';
import { FireFilled, RiseOutlined } from '@ant-design/icons';

const TagContent: FC<any> = () => {
  return (
    <Box className="tag-content mt-26">
      <BoxWellComePage title={'tag.title_welcome'} description={'tag.des_welcome'} />
      <Row gutter={[16, 16]} className="tag-content__wrap">
        <Col xs={12}>
          <ListTagContent title="tag.top_month" description="tag.des_top_month" icon={<FireFilled />} />
        </Col>
        <Col xs={12}>
          <ListTagContent title="tag.top_to_now" description="tag.des_top_to_now" icon={<FireFilled />} />
        </Col>
        <Col xs={24}>
          <ListTagContent title="tag.new" description="tag.des_new" icon={<RiseOutlined />} />
        </Col>
      </Row>
    </Box>
  );
};
export default TagContent;
