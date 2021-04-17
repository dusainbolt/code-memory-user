import { Box } from '@Common/Layout';
import Typography from '@Common/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

interface _ButtonIcon {
    label?: string;
    icon: any;
    className?: any;
    sizeIcon?: number;
    spaceLabel?: number;
    fontSize?: number;
    hoverIcon?: boolean;
    onClick?: VoidFunction;
}

const ButtonIcon: React.FC<_ButtonIcon> = ({ label = '', icon = '', fontSize, hoverIcon, spaceLabel, className = '', sizeIcon = 24, ...props }) => {
    const style = clsx(className, 'app-icon-wrap', hoverIcon && 'hv');
    const styleJsx = { fontSize: `${sizeIcon}px` };

    return label ? (
        <Box className={style} {...props}>
            <FontAwesomeIcon style={styleJsx} className={className} icon={icon} />
            <Typography ml={spaceLabel} fontWeight="regular" fontSize={fontSize} lineHeight={30} type="span">
                {label}
            </Typography>
        </Box>
    ) : (
        <FontAwesomeIcon style={styleJsx} className={className} icon={icon} />
    );
};

export default ButtonIcon;
