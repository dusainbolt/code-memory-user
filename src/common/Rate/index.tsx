import { Rate, RateProps } from 'antd';
import clsx from 'clsx';

export interface _RateCommon extends RateProps {
    className?: string,
}

const RateCommon: React.FC<_RateCommon> = ({ children, className, ...props }) => {
    const styleRate = clsx('app-rate',{ [className]: className });

    return (
        <Rate {...props} className={styleRate}/>
    );
};

export default RateCommon;
