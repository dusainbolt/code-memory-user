import { Tag } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

interface ITagCommon {
  href?: string;
  className?: string;
  label: string;
}

const TagCommon: FC<ITagCommon> = ({ href = '/', label, className }) => {
  return (
    <Tag className={clsx('app-tag', className)}>
      <Link href={href}>
        <a>{label}</a>
      </Link>
    </Tag>
  );
};

export default TagCommon;
