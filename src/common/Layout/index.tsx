import clsx from 'clsx';
export interface _Box {
    children?: any;
    className?: string;
    container?: boolean;
    onClick?: any;
}

export const Box: React.FC<_Box> = ({ children, onClick, container, className }) => {
    const boxStyle = clsx({ [className]: className, container: container });
    return (
        <div onClick={onClick} className={boxStyle}>
            {children}
        </div>
    );
};