import { Box } from '@Common/Layout';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import { faFacebook, faSkype, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Col, Divider, Row, Typography } from 'antd';
import AntImage from '@Common/Image';
import { staticPath } from '@Utils/func';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { LIST_MENU } from '@Common/Header/menuHeader';
import { FC } from 'react';

const Footer: FC<any> = () => {
    const { t } = useTranslation();

    const LIST_CONNECT = [
        {
            icon: faFacebook,
            href: 'https://www.facebook.com/sainboltapp',
            rel: 'Fanpage',
            title: t('common.txt_tooltip_connect', { connect: 'Fanpage' }),
        },
        {
            icon: faFacebook,
            href: 'https://www.facebook.com/sainboltapp',
            rel: 'Profile',
            title: t('common.txt_tooltip_connect', { connect: 'Profile' }),
        },
        {
            icon: faYoutube,
            href: 'https://www.youtube.com/channel/UCUPwDA86_PRWPDYvvOlj8IQ',
            rel: 'Youtube',
            title: t('common.txt_tooltip_connect', { connect: 'Youtube' }),
        },
        {
            icon: faTwitter,
            href: 'https://join.skype.com/invite/kP2kfn0Wu06U',
            rel: 'Twitter',
            title: t('common.txt_tooltip_connect', { connect: 'Twitter' }),
        },
        {
            icon: faSkype,
            href: 'https://join.skype.com/invite/kP2kfn0Wu06U',
            rel: 'Skype',
            title: t('common.txt_tooltip_connect', { connect: 'Skype' }),
        },
    ];

    const LIST_CONTACT = [
        {
            icon: faEnvelope,
            value: t('footer.gmail_support'),
            title: t('common.txt_tooltip_contact', { contact: t('footer.txt_gmail') }),
        },
        {
            icon: faAddressBook,
            value: t('footer.address'),
            title: t('common.txt_tooltip_contact', { contact: t('footer.txt_address') }),
        },
        {
            icon: faPhone,
            value: `+${t('footer.phone_number')}`,
            title: t('common.txt_tooltip_contact', { contact: t('footer.txt_phone_number') }),
        },
    ];

    return (
        <footer className="app-footer">
            <Divider />
            <Box container>
                <Row gutter={32}>
                    <Col xs={24} lg={8} xl={6} className="app-footer--logo-col">
                        <AntImage src={staticPath('/images/logo_header.png')} />
                        <Typography.Paragraph className="app-footer--description-logo">{t('footer.txt_description_logo')}</Typography.Paragraph>
                    </Col>
                    <Col xs={24} sm={8} lg={8} xl={4}>
                        <Typography.Title className="app-footer--title" level={4}>
                            {t('footer.txt_platform')}
                        </Typography.Title>
                        {LIST_MENU.map(
                            (item, index) =>
                                index > 0 &&
                                index !== LIST_MENU.length - 1 && (
                                    <Typography.Link
                                        title={t('common.txt_tooltip_access', { access: t(`menu.${item.name}`) })}
                                        className="app-footer--link"
                                        key={index}
                                        target="_self"
                                        href={item.href}>
                                        {t(`menu.${item.name}`)}
                                    </Typography.Link>
                                )
                        )}
                    </Col>
                    <Col xs={24} sm={12} lg={8} xl={6} className="app-footer--col-contact">
                        <Typography.Title className="app-footer--title" level={4}>
                            {t('footer.txt_contact')}
                        </Typography.Title>
                        {LIST_CONTACT.map((item, index) => (
                            <Typography.Link title={item.title} target="_blank" key={index} className="app-footer--link">
                                <FontAwesomeIcon icon={item.icon} /> <Typography.Text>{item.value}</Typography.Text>
                            </Typography.Link>
                        ))}
                    </Col>
                    <Col xs={24} xl={8}>
                        <Typography.Title className="app-footer--title" level={4}>
                            {t('footer.text_connect')}
                        </Typography.Title>
                        <Row className="app-footer--social-wrap" gutter={[8, 12]}>
                            {LIST_CONNECT.map((item, index) => (
                                <Col key={index} xs={8}>
                                    <Typography.Link title={item.title} target="_blank" href={item.href} className="app-footer--link">
                                        <Box className="app-footer--social-icon">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </Box>
                                        <Typography.Text>{item.rel}</Typography.Text>
                                    </Typography.Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Box>
            <Box className="app-footer--copyright">{t('home.txt_footer_copyright')}</Box>
        </footer>
    );
};

export default Footer;
