import Image from 'next/image';
import { Box } from '@Common/Layout';
import Typography from '@Common/Typography';
interface _SecondWrap {
    // title: string;
    // text: string;
}

const SecondWrap: React.FC<_SecondWrap> = ({}) => {
    return (
        <Box className="second-wrap--container" container>
            <Typography className="second-wrap--title" fontWeight="bold" type="h2" centerBlock textCenter fontSize={45} maxWidth={605}>
                Provide Awesome Service With Our Tools
            </Typography>
            <Typography className="second-wrap--description" fontWeight="medium" type="p" centerBlock textCenter fontSize={20} maxWidth={603}>
                Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
            </Typography>
        </Box>
    );
};

export default SecondWrap;
