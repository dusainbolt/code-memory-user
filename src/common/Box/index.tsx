import clsx from 'clsx';
export interface _Box {
    children?: any;
    className?: string;
    container?: boolean;
    onClick?: any;
}

export const Box: React.FC<_Box> = ({ children, onClick, container, className }) => {
    return (
        <div onClick={onClick} className={clsx({ [className]: className, container: container })}>
            {children}
        </div>
    );
};
