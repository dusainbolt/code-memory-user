import { Box } from '@Common/Box';
import { FC } from 'react';
import { Typography, Divider, Row, Col } from 'antd';
import useTranslation from '@Common/LanguageProvider/useTranslation';

export const AttendedProjects: FC<any> = () => {
    const { t } = useTranslation();
    const data = [
        {
            timeEnd: 'Hiện tại',
            timeStart: 'Tháng 5, 2021',
            titleProject: 'NFTify Bridge: Hệ thống giao dịch tiền ảo qua Smart Contract',
            listDec: [
                `Mô tả: Dịch vụ swap giữa N1-BSC và N1-ETH cho các
            store của NFTify thông qua Metamask và Smart Contract`,
                `Công nghệ: ReactJS, TypeScript, Web3, Ant Design, Socket.io`,
            ],
        },
        {
            timeEnd: 'Hiện tại',
            timeStart: 'Tháng 1, 2021',
            titleProject: 'CodeMemory: Nền tảng Blog lập trình',
            listDec: [
                `Mô tả: Nền tảng chia sẻ kiến thức, khóa học, và diễn đàn lập trình`,
                `Công nghệ: NextJS, TypeScript, Ant Design, NestJS, Mongodb, GraphQL, AWS S3, Redis`,
            ],
        },
        {
            timeEnd: 'Tháng 5, 2021',
            timeStart: 'Tháng 4, 2021',
            titleProject: 'NFTify Directory: Hệ thống liệt kê và đánh giá Store',
            listDec: [
                `Mô tả: Dịch vụ tìm kiếm các của hàng trên NFTify Platform và đánh giá chúng`,
                `Công nghệ: NextJS, TypeScript, Web3, Ant Design`,
            ],
        },
        {
            timeEnd: 'Tháng 5, 2021',
            timeStart: 'Tháng 12, 2020',
            titleProject: 'Xplor Studio: Phần mềm fitness',
            listDec: [
                `Mô tả: Cung cấp nền tảng cho PT quản lý, training, theo dõi sức khỏe, lên lịch trình tập luyện`,
                `Công nghệ: Zend Framework, HTML, CSS, Bootstrap, JQuery, HighCharts, Ajax`,
            ],
        },
        {
            timeEnd: 'Tháng 4, 2021',
            timeStart: 'Tháng 2, 2021',
            titleProject: 'Glocaly EKYC',
            listDec: [`Mô tả: Xây dựng ứng dụng quản lí và xác minh customer`, `Công nghệ: ReactJS, Meterial UI, ChartJS, Socket.io`],
        },
        {
            timeEnd: 'Tháng 2, 2021',
            timeStart: 'Tháng 1, 2020',
            titleProject: 'Map Standard – Glocaly Real Estate',
            listDec: [
                `Mô tả: Xây dựng hệ thống tìm kiếm mua bán bát động sản dựa trên Google Map`,
                `Công nghệ: ReactJS, Meterial UI, GoogleMap API, Socket.io`,
            ],
        },
        {
            timeEnd: 'Tháng 1, 2021',
            timeStart: 'Tháng 10, 2020',
            titleProject: 'SAT MIGRATION',
            listDec: [`Mô tả: Migrate ứng dụng quản lý doanh nghiệp từ source code Adobe Flex sang AngularJS`, `Công nghệ: AngularJS, AgGrid`],
        },
        {
            timeEnd: 'Tháng 10, 2021',
            timeStart: 'Tháng 8, 2020',
            titleProject: 'Sainbolt Class',
            listDec: [
                `Mô tả: Xây dựng hệ thóng, quản lý học viên điểm danh, giao bài tập, nhắc nhở và thống kê thành tích`,
                `Công nghệ: ReactJS, Socket.io, AWS S3, Ant Design, Redis, NodeJS, API Facebook Messenger`,
            ],
        },
        {
            timeEnd: 'Tháng 12, 2020',
            timeStart: 'Tháng 11, 2020',
            titleProject: 'Genesis Compass',
            listDec: [`Mô tả: Nền tảng quản trị, liệt kê danh sách và vẽ chart theo dõi tiền ảo.`, `Công nghệ: ReactJS, ChartingView, Ant Design`],
        },
        {
            timeEnd: 'Tháng 10, 2020',
            timeStart: 'Tháng 6, 2020',
            titleProject: 'Web Nomi Live Streaming',
            listDec: [
                `Mô tả: Xây dựng hệ thóng phát live streaming  ở phía client sử dụng WebRTC`,
                `Công nghệ: ReactJS, Socket.io, Ant Design, WebRTC`,
            ],
        },
        {
            timeEnd: 'Tháng 7, 2020',
            timeStart: 'Tháng 5, 2020',
            titleProject: 'KMA Social',
            listDec: [
                `Mô tả: Xây dựng mạng xã hội trao đổi, học tập cho sinh viên KMA`,
                `Công nghệ: ReactJS, Socket.io, Laravel, Mysql, Redis, API Facebook Messenger`,
            ],
        },
        {
            timeEnd: 'Tháng 6, 2020',
            timeStart: 'Tháng 4, 2020',
            titleProject: 'Matrix Admin',
            listDec: [`Mô tả: Maintain trang quản trị cho hệ thống giao dịch tiền ảo`, `Công nghệ: VueJS`],
        },
        {
            timeEnd: 'Tháng 3, 2020',
            timeStart: 'Tháng 12, 2019',
            titleProject: 'Hai Van ERP: Quản trị doanh nghiệp Hải Vân',
            listDec: [
                `Mô tả: Xây dựng chức năng lịch trình điều độ xe, quản lý chuyên đi trên hệ thống ERP của doanh nghiệp Hải Vân`,
                `Công nghệ: PHP, JQuery, HTML, CSS, Laravel`,
            ],
        },
    ];

    return (
        <Box className="profile__wrap mt-32">
            <Typography.Title className="title-wrap mb-16" level={3}>
                {t('profile.attended_projects')}
            </Typography.Title>
            <Box className="profile__table-attend-project">
                {data.map((item, index) => (
                    <Row key={index}>
                        <Col className="project-time" xs={24} md={4}>
                            <div>{item.timeEnd} - </div>
                            <div>{item.timeStart}</div>
                        </Col>
                        <Col xs={24} md={20}>
                            <div className="info-project-box">
                                <div className="title-project mb-8">{item.titleProject}</div>
                                <ul className="list-info-project">
                                    {item?.listDec.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Divider />
                    </Row>
                ))}
            </Box>
        </Box>
    );
};
