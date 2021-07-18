import Box from '@Common/Box';
import { FC } from 'react';
import { Row, Col, Typography, Progress } from 'antd';
import useTranslation from '@Common/LanguageProvider/useTranslation';

export const DataBase: FC<any> = () => {
    const { t } = useTranslation();
    return (
        <Box className="profile__wrap mt-32">
            <Typography.Title className="title-wrap mb-16" level={3}>
                {t('profile.database')}
            </Typography.Title>
            <Row gutter={[8, 24]}>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8}>Mysql</Col>
                        <Col xs={16}>
                            <Progress percent={80} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} lg={4}></Col>
                <Col xs={24} lg={10}>
                    <Row>
                        <Col xs={8}>Mongodb</Col>
                        <Col xs={16}>
                            <Progress percent={80} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Box>
    );
};
