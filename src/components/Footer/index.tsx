import Button from '@Common/Button';
import { Box, List, ListItem } from '@Common/Layout';
import Typography from '@Common/Typography';

const Footer = ({}) => (
    <footer>
        <Box className="footer">
            <Box container>
                <Typography type="h4" fontWeight="bold" pt={128} color="white" fontSize={44} center maxWidth={556}>
                    Have Question in mind? Let us help you
                </Typography>
                <Box center pRow={38} flexBox justify="space" mt={72} background="white" maxWidth={790} radius={60} height={114}>
                    <div>asdasd</div>
                    <Button label="Send" height={78} radius={50} maxWidth={200}/>
                </Box>
                <Box container flexBox mt={200}>
                  <List color="white" flexBox>
                    <ListItem fontSize={16} fontWeight="medium-xl" align="center" mRow={20}>ABC</ListItem>
                    <ListItem fontSize={16} fontWeight="medium-xl" align="center" mRow={20}>123</ListItem>
                    <ListItem fontSize={16} fontWeight="medium-xl" align="center" mRow={20}>123</ListItem>
                    <ListItem fontSize={16} fontWeight="medium-xl" align="center" mRow={20}>123</ListItem>
                  </List>
                </Box>
            </Box>
        </Box>
    </footer>
);

Footer.propTypes = {
    // t: PropTypes.func.isRequired,
};

export default Footer;
