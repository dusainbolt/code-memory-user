import Box from '@Common/Box';
import { FC } from 'react';
import { Popover, Typography } from 'antd';
import { ThunderboltOutlined, StarOutlined, ShareAltOutlined, LinkOutlined } from '@ant-design/icons';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { useState } from 'react';

export const PopoverCardBlog: FC<any> = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    const handleVisibleChange = visible => {
        console.log(visible);
        setVisible(visible);
    };

    const contentPopoverThunder = (
        <Box className="blog-item__share-wrap">
            <Box className="flx-center align-left blog-item__popover-row p-lr-12 p-tb-8">
                <StarOutlined />
                <Typography.Text className="ml-4">{t('blog.add_list')}</Typography.Text>
            </Box>
            <Box className="flx-center align-left blog-item__popover-row p-lr-12 p-tb-8">
                <LinkOutlined />
                <Typography.Text className="ml-4">{t('blog.share')}</Typography.Text>
            </Box>
            <Box className="flx-center align-left blog-item__popover-row p-lr-12 p-tb-8">
                <ShareAltOutlined />
                <Typography.Text className="ml-4">{t('blog.copy_url')}</Typography.Text>
            </Box>
        </Box>
    );
    return (
        <Popover
            overlayClassName="app-popover"
            onVisibleChange={handleVisibleChange}
            visible={visible}
            placement="bottom"
            content={contentPopoverThunder}
            trigger="click">
            <ThunderboltOutlined />
        </Popover>
    );
};
