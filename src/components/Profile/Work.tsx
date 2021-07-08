import { Box } from '@Common/Box';
import { FC } from 'react';
import { Row, Col, Typography } from 'antd';
import { BookFilled, DashboardFilled } from '@ant-design/icons';
import useTranslation from '@Common/LanguageProvider/useTranslation';

export const Work: FC<any> = () => {
    const { t } = useTranslation();
    return (
        <Box className="profile__wrap mt-32">
            <Typography.Title className="title-wrap mb-16" level={3}>
                {t('profile.work_time')}
            </Typography.Title>
            <Row gutter={[24, 32]}>
                <Col xs={24} md={12}>
                    <Box className="profile__info-circle flx-center align-left">
                        <Box className="icon-circle flx-center">
                            <DashboardFilled />
                        </Box>
                        <Box className="profile__info-text-time flx-center">
                            <Typography.Title className="profile__info-text" level={4}>
                                {t('profile.hai_van_company')}
                            </Typography.Title>
                            <Typography.Paragraph className="profile__info-job">{t('profile.hai_van_job')}</Typography.Paragraph>
                            <Typography.Paragraph className="profile__info-dec">{t('profile.hai_van_dec')}</Typography.Paragraph>
                            <Typography.Paragraph className="profile__info-time">{t('profile.hai_van_time')}</Typography.Paragraph>
                        </Box>
                    </Box>
                </Col>
                <Col xs={24} md={12}>
                    <Box className="profile__info-circle flx-center align-left">
                        <Box className="icon-circle flx-center">
                            <DashboardFilled />
                        </Box>
                        <Box className="profile__info-text-time flx-center">
                            <Typography.Title className="profile__info-text" level={4}>
                                {t('profile.ekoios_company')}
                            </Typography.Title>
                            <Typography.Paragraph className="profile__info-job">{t('profile.ekoios_job')}</Typography.Paragraph>
                            <Typography.Paragraph className="profile__info-dec">{t('profile.ekoios_dec')}</Typography.Paragraph>
                            <Typography.Paragraph className="profile__info-time">{t('profile.ekoios_time')}</Typography.Paragraph>
                        </Box>
                    </Box>
                </Col>
                <Col xs={24} md={12}>
                    <Box className="profile__info-circle flx-center align-left">
                        <Box className="icon-circle flx-center">
                            <DashboardFilled />
                        </Box>
                        <Box className="profile__info-text-time flx-center">
                            <Typography.Title className="profile__info-text" level={4}>
                                {t('profile.freelancer_company')}
                            </Typography.Title>
                            <Typography.Paragraph className="profile__info-job">{t('profile.freelancer_job')}</Typography.Paragraph>
                            <Typography.Paragraph className="profile__info-dec">{t('profile.freelancer_dec')}</Typography.Paragraph>
                            <Typography.Paragraph className="profile__info-time">{t('profile.freelancer_time')}</Typography.Paragraph>
                        </Box>
                    </Box>
                </Col>
            </Row>
        </Box>
    );
};
