import LazyLoad from 'react-lazyload';

interface _LazyComponent {
    // title: string;
    className?: string;
    once?: boolean;
    scroll?: boolean;
    offset?: number;
    placeholder?: any;
    throttle?: number;
}

const LazyComponent: React.FC<_LazyComponent> = ({ children, className, ...props }) => {
    return <LazyLoad {...props} classNamePrefix={`${className} `}>{children}</LazyLoad>;
};

export default LazyComponent;
