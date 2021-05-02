import Button from '@Common/Button';
import InputComponent from '@Common/Input';
import { Box, List, ListItem } from '@Common/Layout';
import Typography from '@Common/Typography';
import { Field, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import * as _style from './style';
import { LIST_MENU } from '@Config/contains';
import useTranslation from '@Components/LanguageProvider/useTranslation';

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
                <Box container className="footer-menu" flexBox mt={100} pb={30}>
                <a href="https://github.com/zero-to-mastery" target="_blank" rel="noopener noreferrer">ABOUT</a>
                    <List color="white" flexBox>
                        {LIST_MENU.map((item, index) => (
                            <ListItem key={index} {..._style.itemMenuFooter}>
                                <Link href={item.href}><a>{t(`menu.${item.name}`)}</a></Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </footer>
    );
};
Footer.propTypes = {
    // t: PropTypes.func.isRequired,
};

export default Footer;
