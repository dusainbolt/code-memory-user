import { Tag, TagProps } from 'antd';
import clsx from 'clsx';

export interface _TagCommon extends TagProps {
    className?: string,
}

const TagCommon: React.FC<_TagCommon> = ({ children, className, ...props }) => {
    const styleTag = clsx('app-tag',{ [className]: className });

    return (
        <Tag {...props} className={styleTag}>
            {children}
        </Tag>
    );
};

export default TagCommon;
