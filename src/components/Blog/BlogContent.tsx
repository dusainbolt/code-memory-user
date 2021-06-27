import { Box } from '@Common/Box';
import { FC } from 'react';
import BoxSuggestLogin from '@Components/Blog/BoxSuggestLogin';
import { Col, Divider, Row, Typography } from 'antd';

const BlogContent: FC<any> = () => {
    return (
        <Box className="blog-content">
            <Box className="sticky-content">
                <BoxSuggestLogin />
                <Box className="list-blog card-blog">
                    <Row gutter={[32, 0]}>
                        <Col xs={24}>123213</Col>
                        <Col xs={24}>123213</Col>
                    </Row>
                </Box>
            </Box>
        </Box>
    );
};
export default BlogContent;
