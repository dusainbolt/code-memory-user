import { Box } from '@Common/Layout';
import { LIST_MENU } from '@Config/contains';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { faFacebook, faSkype, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Col, Divider, Row, Typography } from 'antd';
import AntImage from '@Common/Image';
import { staticPath } from '@Utils/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = ({}) => {
    const { t } = useTranslation();

    const LIST_CONTACT = [
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

    return (
        <footer className="app-footer">
            <Divider />
            <Box container>
                <Row gutter={32}>
                    <Col lg={6}>
                        <AntImage src={staticPath('/images/logo_header.png')} />
                        <Typography.Paragraph>Fuel the rise of the Digital Content World</Typography.Paragraph>
                    </Col>
                    <Col lg={4}>
                        <Typography.Title className="app-footer--title" level={4}>
                            NỀN TẢNG
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
                            LIÊN HỆ
                        </Typography.Title>
                        <Typography.Link className="app-footer--link">
                            <FontAwesomeIcon icon={faEnvelope} /> <Typography.Text>codememory.hotro@gmail.com</Typography.Text>
                        </Typography.Link>
                        <Typography.Link className="app-footer--link">
                            <FontAwesomeIcon icon={faAddressBook} /> <Typography.Text>219 Trung Kính, Cầu Giấy, Hà Nội</Typography.Text>
                        </Typography.Link>
                        <Typography.Link className="app-footer--link">
                            <FontAwesomeIcon icon={faPhone} /> <Typography.Text>+8432811197</Typography.Text>
                        </Typography.Link>{' '}
                    </Col>
                    <Col lg={8}>
                        <Typography.Title className="app-footer--title" level={4}>
                            MẠNG XÃ HỘI
                        </Typography.Title>
                        <Row className="app-footer--social-wrap" gutter={[8, 12]}>
                            {LIST_CONTACT.map((item, index) => (
                                <Col key={index} xs={6}>
                                    <Box className="app-footer--social-icon">
                                        <FontAwesomeIcon icon={item.icon} />
                                    </Box>
                                    <Typography>{item.rel}</Typography>
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
