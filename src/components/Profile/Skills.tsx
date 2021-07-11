import Box from '@Common/Box';
import { FC } from 'react';
import { Row, Col, Typography, Progress } from 'antd';
import useTranslation from '@Common/LanguageProvider/useTranslation';

export const Skills: FC<any> = () => {
    const { t } = useTranslation();
    return (
        <Box className="profile__wrap mt-32">
            <Typography.Title className="title-wrap mb-16" level={3}>
                {t('profile.professional_skills')}
            </Typography.Title>
            <Row gutter={[8, 24]}>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            HTML
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={90} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} lg={4}></Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            CSS
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={90} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            Ant Design
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={90} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} lg={4}></Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            JavaScript
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={90} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            JQuery
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={60} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} lg={4}></Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            Angular
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={60} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            ReactJS
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={90} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} lg={4}></Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            NextJS
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={90} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            VueJS
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={60} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} lg={4}></Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            NodeJS
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={80} />
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            NestJS
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={80} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} lg={4}></Col>

                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            PHP
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={80} />
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            Socket.io
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={80} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} lg={4}></Col>

                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8} lg={6}>
                            GraphQL
                        </Col>
                        <Col xs={16} lg={18}>
                            <Progress percent={90} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Box>
    );
};
