import { Box } from '@Common/Box';
import TagCommon from '@Common/Tag';
import { Avatar, Popover, Typography } from 'antd';
import { FC } from 'react';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { LikeOutlined, CommentOutlined, ThunderboltOutlined, StarOutlined, ShareAltOutlined, LinkOutlined } from '@ant-design/icons';

const CardBlog: FC<any> = () => {
    const { t } = useTranslation();

    const contentPopoverThunder = (
        <Box className="blog-item__share-wrap">
            <Box className="flx-center align-left blog-item__popover-row p-lr-12 p-tb-8">
                <StarOutlined />
                <Typography.Text className="ml-4">{t('blog.share')}</Typography.Text>
            </Box>
            <Box className="flx-center align-left blog-item__popover-row p-lr-12 p-tb-8">
                <LinkOutlined />
                <Typography.Text className="ml-4">{t('blog.add_list')}</Typography.Text>
            </Box>
            <Box className="flx-center align-left blog-item__popover-row p-lr-12 p-tb-8">
                <ShareAltOutlined />
                <Typography.Text className="ml-4">{t('blog.copy_url')}</Typography.Text>
            </Box>
        </Box>
    );
    return (
        <Box className="card-blog blog-item mt-16">
            <div
                className="blog-item__image"
                style={{
                    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYt45_LAlzErKc52N2Xurys--ogeZC1Bxf2Y9Qk81D78UXC8m39z66ljFHdfdqALAFJc&usqp=CAU")`,
                }}></div>
            <Box className="blog-item__content ml-12">
                <Typography.Title className="blog-item__title title-2 mb-10" ellipsis={{ rows: 2 }} level={3}>
                    <a href="/">
                        Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V
                        tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến
                        trúc RISC-V tương
                    </a>
                </Typography.Title>
                <Typography.Paragraph className="txt-dec-light blog-item__description" ellipsis={{ rows: 2 }}>
                    Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU
                    kiến trúc RDNA2 của AMD phát triển trong tháng 0
                </Typography.Paragraph>
                <Typography.Paragraph className="tag-wrap-expand" ellipsis={{ expandable: true }}>
                    <TagCommon label="lap trinh" href="/" />
                    <TagCommon label="lap trinh" href="/" />
                    <TagCommon label="lap trinh" href="/" />
                    <TagCommon label="lap trinh" href="/" />
                    <TagCommon label="lap trinh" href="/" />
                    <TagCommon label="lap trinh" href="/" />
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
                        <Popover overlayClassName="app-popover" placement="bottom" content={contentPopoverThunder} trigger="click">
                            <ThunderboltOutlined />
                        </Popover>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CardBlog;
