import Button from '@Common/Button';
import InputComponent from '@Common/Input';
import { Box, List, ListItem } from '@Common/Layout';
import Typography from '@Common/Typography';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import * as _style from './style';

const Footer = ({}) => {
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
                <Box container className="footer-menu" flexBox mt={128}>
                    <List color="white" flexBox>
                        <ListItem {..._style.itemMenuFooter}>ABC</ListItem>
                        <ListItem {..._style.itemMenuFooter}>123</ListItem>
                        <ListItem {..._style.itemMenuFooter}>123</ListItem>
                        <ListItem {..._style.itemMenuFooter}>123</ListItem>
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
