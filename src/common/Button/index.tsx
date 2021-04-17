import clsx from 'clsx';
import Link from 'next/link';
import { _getStyleLayout } from '@Utils/index';
import { _styleLayout } from '@Config/models';
interface _Button extends _styleLayout {
    label: string;
    type?: string;
    shadow?: boolean;
    outline?: boolean;
    round?: boolean;
    link?: boolean;
    submit?: boolean;
    href?: string;
    onClick?: VoidFunction;
}

const Button: React.FC<_Button> = ({
    label = '',
    type = 'primary',
    shadow,
    outline,
    round,
    link,
    href = '',
    submit,
    onClick,
    ...props
}) => {
    const style = clsx({
        'app-btn': true,
        shadow: shadow,
        outline: outline,
        round: round,
        [type]: type,
        ..._getStyleLayout(props),
    });

    return !link ? (
        <button type={submit ? 'submit' : `button`} className={style} onClick={onClick}>
            {label}
        </button>
    ) : (
        <Link href={href}>
            <a className={style} onClick={onClick}>
                {label}
            </a>
        </Link>
    );
};

export default Button;
