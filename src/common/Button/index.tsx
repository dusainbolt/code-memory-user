import { Button, Tooltip } from 'antd';
import { BaseButtonProps } from 'antd/lib/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TooltipPlacement } from 'antd/lib/tooltip';
import clsx from 'clsx';

export interface _ButtonCommon extends BaseButtonProps {
    children?: any;
    titleTooltip?: string;
    className?: string;
    fontAWS?: IconProp;
    placement?: TooltipPlacement;
}

const ButtonCommon: React.FC<_ButtonCommon> = ({ children, className, placement = 'bottom', fontAWS, icon, titleTooltip, ...props }) => {
    const iconProps = icon || (fontAWS ? <FontAwesomeIcon icon={fontAWS} /> : null);

    return (
        <Tooltip placement={placement} title={titleTooltip || children}>
            <Button className={clsx({ 'app-btn': true, [className]: className })} icon={iconProps} {...props}>
                {children}
            </Button>
        </Tooltip>
    );
};

export default ButtonCommon;
