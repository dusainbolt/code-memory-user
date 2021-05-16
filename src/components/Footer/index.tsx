import Button from '@Common/Button';
import InputComponent from '@Common/Input';
import { AppLink, Box, List, ListItem } from '@Common/Layout';
import Typography from '@Common/Typography';
import { Field, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import * as _style from './style';
import { LIST_MENU } from '@Config/contains';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlus, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = ({}) => {
    const { t } = useTranslation();
    const submitReject = values => {
        console.log(values);
    };

    const validationSchema = Yup.object({
        email: Yup.string().trim().required('RONG roi nhe').email('PHAI LA EMAIL'),
    });

    const LIST_CONTACT = [
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
            icon: faGooglePlus,
            href: 'mailto:dulh181199@gmail.com',
            rel: 'Email',
        },
        {
            icon: faSkype,
            href: 'https://join.skype.com/invite/kP2kfn0Wu06U',
            rel: 'Skype',
        },
    ];

    return (
        <footer className="app-footer">
            <Box container>
                <Typography className="title-footer" {..._style.titleFooter}>
                    Have Question in mind? Let us help you
                </Typography>
                <Formik initialValues={{ email: '' }} validationSchema={validationSchema} onSubmit={submitReject} enableReinitialize>
                    {({ handleSubmit, values }) => (
                        <Box className="footer-email-input-wrap" {..._style.boxContact}>
                            <Field
                                placeholder="yournam@email.com"
                                outline
                                boxProps={{ fullWidth: true, mr: 8 }}
                                component={InputComponent}
                                classInput="footer-email-input"
                                name="email"
                                type="email"
                            />
                            <Button onClick={handleSubmit} label="Send" {..._style.buttonSendEmail} />
                        </Box>
                    )}
                </Formik>
                <List mt={70} flexBox className="footer-contact-list">
                    {LIST_CONTACT.map((item, key) => (
                        <ListItem key={key} {..._style.itemContact}>
                            <AppLink href={item.href} target="_blank" rel={item.rel}>
                                <FontAwesomeIcon icon={item.icon} />
                            </AppLink>
                        </ListItem>
                    ))}
                </List>
                <Box className="footer-menu" {..._style.footerMenu}>
                    <List color="white" flexBox>
                        {LIST_MENU.map((item, index) => (
                            <ListItem key={index} {..._style.itemMenuFooter}>
                                <Link href={item.href}>
                                    <a rel={t(`menu.${item.name}`)}>{t(`menu.${item.name}`)}</a>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
            <Box className="footer-copyright" {..._style.footerCopyRight}>
                {t('home.txt_footer_copyright')}
            </Box>
        </footer>
    );
};

export default Footer;
