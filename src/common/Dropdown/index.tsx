import { Box } from '@Common/Layout';
import { DARK_THEME } from '@Config/contains';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { _styleLayout } from '@Config/models';
import { Menu, Dropdown } from 'antd';

interface _Dropdown {
    content?: any;
    className?: string;
    placement?: any,
}

const DropdownCommon: React.FC<_Dropdown> = ({ children, content, className = '', ...props }) => {
    return <Dropdown {...props} overlay={content}>{children}</Dropdown>;
};

export default DropdownCommon;
