import Image from 'next/image';
import { Box } from '@Common/Layout';
import Typography from '@Common/Typography';
interface _SecondWrap {
    // title: string;
    // text: string;
}

const SecondWrap: React.FC<_SecondWrap> = ({}) => {
    return (
        <Box className="second-wrap__container" container>
            <Typography className="second-wrap__title" weight={700} type="h2" center size={45} width={605}>
                Provide Awesome Service With Our Tools
            </Typography>
            <Typography className="second-wrap__description" weight={500} type="p" center size={20} width={603}>
                Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
            </Typography>
        </Box>
    );
};

export default SecondWrap;
