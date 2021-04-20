import Button from '@Common/Button';
import InputComponent from '@Common/Input';
import { Box, List, ListItem } from '@Common/Layout';
import Typography from '@Common/Typography';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

const Footer = ({}) => {
    const submitReject = values => {
        console.log(values);
    };

    const validationSchema = Yup.object({
        email: Yup.string().trim().required('RONG roi nhe').email('PHAI LA EMAIL'),
    });

    return (
        <footer>
            <Box className="footer">
                <Box container>
                    <Typography type="h4" fontWeight="bold" pt={128} color="white" fontSize={44} textCenter centerBlock maxWidth={556}>
                        Have Question in mind? Let us help you
                    </Typography>
                    <Box
                        className="footer__email-input-wrap"
                        centerBlock
                        pRow={38}
                        pCol={20}
                        flexBox
                        justify="space"
                        mt={72}
                        background="white"
                        maxWidth={790}
                        radius={60}>
                        <Formik initialValues={{ email: '' }} validationSchema={validationSchema} onSubmit={submitReject} enableReinitialize>
                            {({ handleSubmit, values }) => (
                                <>
                                    <Field
                                        placeholder="yournam@email.com"
                                        outline
                                        boxProps={{ fullWidth: true, mr: 8 }}
                                        component={InputComponent}
                                        classInput="footer__email-input"
                                        name="email"
                                        type="email"
                                    />
                                    <Button submit onClick={handleSubmit} label="Send" height={78} radius={50} maxWidth={200} />
                                </>
                            )}
                        </Formik>
                    </Box>
                    <Box container flexBox mt={200}>
                        <List color="white" flexBox>
                            <ListItem fontSize={16} fontWeight="medium-xl" align="center" mRow={20}>
                                ABC
                            </ListItem>
                            <ListItem fontSize={16} fontWeight="medium-xl" align="center" mRow={20}>
                                123
                            </ListItem>
                            <ListItem fontSize={16} fontWeight="medium-xl" align="center" mRow={20}>
                                123
                            </ListItem>
                            <ListItem fontSize={16} fontWeight="medium-xl" align="center" mRow={20}>
                                123
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </footer>
    );
};
Footer.propTypes = {
    // t: PropTypes.func.isRequired,
};

export default Footer;
