import IconApp from '@Common/IconApp';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Drawer, DrawerProps } from 'antd';

interface _Drawer extends DrawerProps {}

const DrawerCommon: React.FC<_Drawer> = ({ children, closable = true, ...props }) => {
    return (
        <Drawer closable={closable} closeIcon={<IconApp icon={faTimesCircle} />} {...props}>
            {children}
        </Drawer>
    );
};

export default DrawerCommon;
