import AntImage from '@Common/Image';
import { Box } from '@Common/Box';
import { FC } from 'react';
import { staticPath } from '@Utils/func';

const LogoHeader: FC<any> = () => {
    return (
        <Box className="header--logo">
            <a href="/">
                <AntImage width="209" height="51" alt="Logo CodeMemory" src={staticPath('/images/logo_header.webp')} />
            </a>
        </Box>
    );
};
export default LogoHeader;
