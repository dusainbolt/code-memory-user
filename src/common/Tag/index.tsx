import { Tag } from 'antd';
import { FC } from 'react';

interface ITagCommon {
    href: string;
    label: string;
}

const TagCommon: FC<ITagCommon> = ({ href, label }) => {
    return (
        <Tag className="app-tag">
            <a href={href}>{label}</a>
        </Tag>
    );
};

export default TagCommon;
