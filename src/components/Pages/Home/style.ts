import { _ImageWrapper } from '@Common/ImageWrapper/index';
import { _Typography } from '@Common/Typography';
import { _Button } from '@Common/Button/index';
import { _Box } from '@Common/Layout';
import { ImageProps } from 'next/image';

export const styleDescriptionInteract: _Typography = {
    textCenter: true,
    fontWeight: 'regular',
    type: 'p',
    lineHeight: 30,
    fontSize: 20,
    mt: 14,
};

export const styleImageInteract: _ImageWrapper = { width: 195, height: 183, centerImg: true };

export const styleTitleBanner: _Typography = {
    fontWeight: 'bold',
    type: 'h1',
};

export const styleDescriptionBanner: _Typography = {
    fontWeight: 'medium',
    mt: 30,
};

export const styleImageBanner: ImageProps = {
    width: 764,
    alt: 'img-content-banner',
    quality: 85,
    height: 393,
    src: '/images/img_banner.png',
};

export const styleButtonViewNextHome: _Button = {
    link: true,
    flexBox: true,
    mt: 46,
    height: 60,
    width: 206,
    round: true,
    fontSize: 20,
};

export const styleTitleWrapInteract: _Typography = {
    fontWeight: 'bold',
    type: 'h2',
    centerBlock: true,
    textCenter: true,
    pt: 100,
    lineHeight: 54,
    mb: 30,
    fontSize: 44,
    maxWidth: 604,
};

export const styleCardInteract: _Box = {
    padding: 26,
    minHeightPercent: 100,
    radius: 30,
};

export const styleInteractTitle: _Typography = {
    textCenter: true,
    fontWeight: 'bold',
    type: 'h3',
    lineHeight: 36,
    fontSize: 26,
    mt: 28
};
