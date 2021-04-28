import clsx from 'clsx';
import LazyLoad from 'react-lazyload';

interface _LazyComponent {
    // title: string;
    className?: string;
    once?: boolean;
    scroll?: boolean;
    offset?: number;
    placeholder?: any;
    throttle?: number;
    height?: number;
    unmountIfInvisible?: boolean;
}

const LazyComponent: React.FC<_LazyComponent> = ({ children, className, ...props }) => {
    const styleDropdown = clsx({[`${className} `]: className });

    return <LazyLoad {...props} classNamePrefix={`${styleDropdown}app-lazy`}>{children}</LazyLoad>;
};

export default LazyComponent;
