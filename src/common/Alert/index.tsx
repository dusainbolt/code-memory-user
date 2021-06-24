import { Alert } from 'antd';
import clsx from 'clsx';
// export interface _Box {
//     children?: any;
//     className?: string;
//     container?: boolean;
//     onClick?: any;
// }

export const AlertCommon: React.FC<any> = ({ children, onClick, container, message = "", className }) => {
    return <Alert message={message} className={clsx({ [className]: className, 'app-alert': true })} type="error" />;

};