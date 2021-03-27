import { Link } from '@I18n/index';
import clsx from 'clsx';
interface _Button {
    label: string;
    type?: string;
    shadow?: boolean;
    outline?: boolean;
    round?: boolean;
    link?: boolean;
    href?: string,
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
        <button type="button" className={style} {...props}>
            {label}
        </button>
    ) : (
        <Link href={href}>
            <a className={style} {...props}>
                {label}
            </a>
        </Link>
    );
};

export default Button;
