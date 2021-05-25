import { Box } from '@Common/Layout';
import { LIST_MENU } from '@Config/contains';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { faFacebook, faSkype, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Col, Divider, Row, Typography } from 'antd';
import AntImage from '@Common/Image';
import { staticPath } from '@Utils/func';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = ({}) => {
    const { t } = useTranslation();

    const LIST_CONNECT = [
        {
            icon: faFacebook,
            href: 'https://www.facebook.com/sainboltapp',
            rel: 'Fanpage',
        },
        {
            icon: faFacebook,
            href: 'https://www.facebook.com/sainboltapp',
            rel: 'Facebook',
        },
        {
            icon: faYoutube,
            href: 'https://www.youtube.com/channel/UCUPwDA86_PRWPDYvvOlj8IQ',
            rel: 'Youtube',
        },
        {
            icon: faTwitter,
            href: 'https://join.skype.com/invite/kP2kfn0Wu06U',
            rel: 'Twitter',
        },
        {
            icon: faSkype,
            href: 'https://join.skype.com/invite/kP2kfn0Wu06U',
            rel: 'Skype',
        },
    ];

    const LIST_CONTACT = [
        {
            icon: faEnvelope,
            value: t('footer.gmail_support'),
            title: t('footer.txt_tooltip_contact', { contact: t('footer.txt_gmail') }),
        },
        {
            icon: faAddressBook,
            value: t('footer.address'),
            title: t('footer.txt_tooltip_contact', { contact: t('footer.txt_address') }),
        },
        {
            icon: faPhone,
            value: `+${t('footer.phone_number')}`,
            title: t('footer.txt_tooltip_contact', { contact: t('footer.txt_phone_number') }),
        },
    ];

    return (
        <footer className="app-footer">
            <Divider />
            <Box container>
                <Row gutter={32}>
                    <Col lg={6}>
                        <AntImage src={staticPath('/images/logo_header.png')} />
                        <Typography.Paragraph>{t('footer.txt_description_logo')}</Typography.Paragraph>
                    </Col>
                    <Col lg={4}>
                        <Typography.Title className="app-footer--title" level={4}>
                            {t('footer.txt_platform')}
                        </Typography.Title>
                        {LIST_MENU.map(
                            (item, index) =>
                                index > 0 &&
                                index !== LIST_MENU.length - 1 && (
                                    <Typography.Link className="app-footer--link" key={index} href={item.href}>
                                        {t(`menu.${item.name}`)}
                                    </Typography.Link>
                                )
                        )}
                    </Col>
                    <Col lg={6} className="app-footer--col-contact">
                        <Typography.Title className="app-footer--title" level={4}>
                            {t('footer.txt_contact')}
                        </Typography.Title>
                        {LIST_CONTACT.map((item, index) => (
                            <Typography.Link title={item.title} target="_blank" key={index} className="app-footer--link">
                                <FontAwesomeIcon icon={item.icon} /> <Typography.Text>{item.value}</Typography.Text>
                            </Typography.Link>
                        ))}
                    </Col>
                    <Col lg={8}>
                        <Typography.Title className="app-footer--title" level={4}>
                            {t('footer.text_connect')}
                        </Typography.Title>
                        <Row className="app-footer--social-wrap" gutter={[8, 12]}>
                            {LIST_CONNECT.map((item, index) => (
                                <Col key={index} xs={6}>
                                    <Typography.Link target="_blank" href={item.href} className="app-footer--link">
                                        <Box className="app-footer--social-icon">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </Box>
                                        <Typography>{item.rel}</Typography>
                                    </Typography.Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Box>
            <Box className="footer-copyright">{t('home.txt_footer_copyright')}</Box>
        </footer>
    );
};

export default Footer;
