import Typography from '@Common/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

interface _ButtonIcon {
    label?: string;
    icon: any;
    className?: any;
    size?: number;
    onClick?: VoidFunction;
}

const ButtonIcon: React.FC<_ButtonIcon> = ({ label = '', icon = '', className = '', size = 24, ...props }) => {
    const style = clsx(className, 'app-icon-wrap');
    const styleJsx = { fontSize: `${size}px` };

    return label ? (
        <div className={style}>
            <FontAwesomeIcon style={styleJsx} className={className} icon={icon} />
            <Typography weight={400} lineHeight={30} type="span">
                {label}
            </Typography>
        </div>
    ) : (
        <FontAwesomeIcon style={styleJsx} className={className} icon={icon} />
    );
};

export default ButtonIcon;
