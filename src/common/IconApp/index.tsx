import { _styleLayout } from '@Config/models';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import clxs from "clsx";
import { _getStyleLayout } from "@Utils/index";

interface _IconApp extends FontAwesomeIconProps{
    className?: string;
    round?: boolean;
    propsLayout?: _styleLayout;
}

const IconApp: React.FC<_IconApp> = ({ round, className, propsLayout = {},...props }) => {
    const styleIcon = clxs({
        ..._getStyleLayout(propsLayout),
        'app-icon': true,
        'icon-round': round,
        [className]: className
    });
    return (
        <span className={styleIcon}>
            <FontAwesomeIcon {...props} />
        </span>
    );
};

export default IconApp;
