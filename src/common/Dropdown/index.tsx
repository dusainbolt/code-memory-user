import { Dropdown, DropDownProps } from 'antd';

interface _Dropdown extends DropDownProps {}

const DropdownCommon: React.FC<_Dropdown> = ({ children, className = '', ...props }) => {
    return (
        <Dropdown overlayClassName={className} {...props}>
            {children}
        </Dropdown>
    );
};

export default DropdownCommon;
