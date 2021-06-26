import { Button, Tooltip } from 'antd';
import { BaseButtonProps } from 'antd/lib/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TooltipPlacement } from 'antd/lib/tooltip';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@Redux/store';

export interface _ButtonCommon extends BaseButtonProps {
    children?: any;
    titleTooltip?: string;
    className?: string;
    fontAWS?: IconProp;
    placement?: TooltipPlacement;
    href?: string;
    onClick?: any;
    actionTypeLoading?: string;
}

const ButtonCommon: React.FC<_ButtonCommon> = ({
    children,
    shape,
    actionTypeLoading,
    type,
    className,
    placement = 'bottom',
    fontAWS,
    icon,
    titleTooltip,
    ...props
}) => {
    const iconProps = icon || (fontAWS ? <FontAwesomeIcon icon={fontAWS} /> : null);
    const isLoadingReducer = useAppSelector(store => store.isLoadingReducer);
    const loadingRequest = actionTypeLoading && isLoadingReducer[actionTypeLoading] ? true : false;

    return (
        <Tooltip overlayClassName={clsx(`${className}-tooltip`)} placement={placement} title={titleTooltip || children}>
            <Button
                loading={loadingRequest}
                type={type}
                shape={shape}
                className={clsx({ 'app-btn': true, [className]: className })}
                icon={iconProps}
                {...props}>
                {children}
            </Button>
        </Tooltip>
    );
};

export default ButtonCommon;
