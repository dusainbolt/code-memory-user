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
                            <Button submit onClick={handleSubmit} label="Send" {..._style.buttonSendEmail} />
                        </Box>
                    )}
                </Formik>
                <List mt={70} flexBox className="footer-contact-list">
                    <ListItem flexBox circle mRow={30}>
                        <AppLink href="https://www.facebook.com/sainboltapp" target="_blank" rel="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </AppLink>
                    </ListItem>
                    <ListItem flexBox circle mRow={30}>
                        <AppLink href="https://www.youtube.com/channel/UCUPwDA86_PRWPDYvvOlj8IQ" target="_blank" rel="Youtube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </AppLink>
                    </ListItem>
                    <ListItem flexBox circle mRow={30}>
                        <AppLink href="mailto:dulh181199@gmail.com" target="_blank" rel="Email">
                            <FontAwesomeIcon icon={faGooglePlus} />
                        </AppLink>
                    </ListItem>
                    <ListItem flexBox circle mRow={30}>
                        <AppLink href="https://join.skype.com/invite/kP2kfn0Wu06U" target="_blank" rel="Skype">
                            <FontAwesomeIcon icon={faSkype} />
                        </AppLink>
                    </ListItem>
                </List>
                <Box container className="footer-menu" flexBox mt={80} pb={30}>
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
            <Box className="footer-copyright" letterSpacing={1} pt={6} height={32} align="center">© Copyright Du Sainbolt. All Rights Reserved</Box>
        </footer>
    );
};

export default Footer;
