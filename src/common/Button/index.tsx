import clsx from 'clsx';
import Link from 'next/link';
interface _Button {
    label: string;
    type?: string;
    shadow?: boolean;
    outline?: boolean;
    round?: boolean;
    link?: boolean;
    href?: string,
    width?: number,
    onClick?: VoidFunction;
}

const Button: React.FC<_Button> = ({
    label = '',
    type = 'primary',
    shadow = false,
    outline = false,
    round = false,
    link = false,
    href = "",
    width = "",
    ...props
}) => {
    const style = clsx(
        'app-btn',
        type,
        shadow && 'shadow',
        outline && 'outline',
        round && 'round'
    );
    return !link ? (
        <button style={{minWidth: `${width}px`}} type="button" className={style} {...props}>
            {label}
        </button>
    ) : (
        <Link href={href}>
            <a style={{minWidth: `${width}px`}} className={style} {...props}>
                {label}
            </a>
        </Link>
    );
};

export default Button;
