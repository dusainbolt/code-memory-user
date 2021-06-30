import { Box } from '@Common/Box';
import { FC } from 'react';
import { Typography, Avatar } from 'antd';
import { LikeOutlined, CommentOutlined, AntDesignOutlined } from '@ant-design/icons';

const ListTopArticle: FC<any> = ({ time }) => {
    const article = (
        <Box className="article-item m-tb-12">
            <Typography.Title className="blog-item__title title-2 mb-10" ellipsis={{ rows: 3 }} level={3}>
                <a href="/">
                    Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương
                    tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V
                    tương
                </a>
            </Typography.Title>
            <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                {/* <Tooltip title="Ant User" placement="top">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </Tooltip> */}
                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            </Avatar.Group>
            <Box className="blog-item__interact flx-center">
                <Box className="interact-wrap flx-center align-left">
                    <LikeOutlined />
                    <Typography.Text className="interact-value mr-20">13</Typography.Text>
                    <CommentOutlined />
                    <Typography.Text className="interact-value">13</Typography.Text>
                </Box>
            </Box>
        </Box>
    );
    return (
        <Box className="list-top-article p-lr-20">
            {article}
            {article}
            {article}
            {article}
            {article}
            {article}

            {article}
        </Box>
    );
};

export default ListTopArticle;
