import clsx from 'clsx';
import Link from 'next/link';
interface _Button {
    label: string;
    type?: string;
    shadow?: boolean;
    outline?: boolean;
    round?: boolean;
    link?: boolean;
    href?: string;
    width?: number;
    mTopBottom?: number;
    height?:number,
    mLeftRight?: number;
    className?: string;
    onClick?: VoidFunction;
}

const Button: React.FC<_Button> = ({
    label = '',
    type = 'primary',
    shadow = false,
    outline = false,
    round = false,
    link = false,
    href = '',
    width = '',
    className = '',
    mTopBottom = 0,
    mLeftRight = 0,
    height = 42,
    ...props
}) => {
    const style = clsx('app-btn', type, shadow && 'shadow', outline && 'outline', round && 'round', className);
    const styleJsx = { width: `${width}px`, minWidth: `${width}px`, margin: `${mTopBottom}px ${mLeftRight}px`, height: `${height}px` };
    return !link ? (
        <button style={styleJsx} type="button" className={style} {...props}>
            {label}
        </button>
    ) : (
        <Link href={href}>
            <a style={styleJsx} className={style} {...props}>
                {label}
            </a>
        </Link>
    );
};

export default Button;
