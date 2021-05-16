import { _ImageWrapper } from '@Common/ImageWrapper/index';
import { _Typography } from '@Common/Typography';
import { _Button } from '@Common/Button/index';
import { _Box, _Col, _Row } from '@Common/Layout';
import { FONT_SIZE } from '@Config/contains';

export const styleContentLetter: _Typography = {
    italic: true,
    fontWeight: 'regular',
    lineHeight: 30,
    fontSize: 18,
};

export const styleAutoGraph: _ImageWrapper = {
    width: 200,
    height: 90,
    alt: 'founder & author CodeMemory',
    boxProps: {
        mt: 40,
    },
};

export const styleMissionFounder: _Typography = {
    idProps: { property: 'mission' },
    type: 'span',
    fontSize: 14,
};

export const styleNameFounder: _Typography = {
    type: 'h3',
    fontSize: 20,
    mt: 18,
};

export const styleTitleFounder: _Typography = {
    fontWeight: 'bold',
    lineHeight: 30,
    type: 'h2',
    fontSize: 32,
};

export const boxBoxStyleBox: _Box = {
    flexBox: true,
    minHeightPercent: 100,
    flexCol: true,
    alignItem: 'start',
};

export const styleAvatarFounder: _ImageWrapper = {
    width: 526,
    height: 526,
    centerImg: true,
    alt: 'founder & author CodeMemory',
};

export const styleFounderWrap: _Row = {
    radius: 30,
    mb: 100,
    mt: 20
};

export const styleButtonServiceItem: _Button = {
    mr: 38,
    round: true,
    maxWidth: 180,
    height: 46,
};

export const styleBoxButtonServiceItem: _Box = {
    fullWidth: true,
    flexBox: true,
    mt: 22,
    justify: 'start',
};

export const styleDescriptionServiceItem: _Typography = {
    fontWeight: 'regular',
    lineHeight: 30,
    fontSize: 18,
    mCol: 22,
};

export const styleImageServiceItem: _ImageWrapper = {
    width: 423,
    height: 395,
    boxProps: {
        maxWidth: 450,
        centerBlock: true,
    },
};

export const styleTitleServiceItem: _Typography = {
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 54,
    type: 'h2',
};

export const styleTitleServiceWrap: _Typography = {
    fontSize: 40,
    fontWeight: 'bold',
    maxWidth: 640,
    align: 'center',
    centerBlock: true,
};

export const styleColContentService: _Col = {
    flexBox: true,
    alignItem: 'start',
    flexCol: true,
};

export const styleDescriptionInteract: _Typography = {
    textCenter: true,
    fontWeight: 'regular',
    type: 'p',
    lineHeight: 30,
    fontSize: FONT_SIZE + 4,
    mt: 14,
};

export const styleBannerInfoWrap: _Box = {
    maxWidth: 542,
    flexBox: true,
    flexCol: true,
    minHeightPercent: 100,
    alignItem: 'start',
};

export const styleImageInteract: _ImageWrapper = { width: 195, height: 183, centerImg: true };

export const styleTitleBanner: _Typography = {
    fontWeight: 'bold',
    type: 'h1',
    fontSize: FONT_SIZE + 44,
    lineHeight: 86,
};

export const styleDescriptionBanner: _Typography = {
    fontWeight: 'medium',
    mt: 30,
    fontSize: 18,
    lineHeight: 26,
};

export const styleImageBanner: _ImageWrapper = {
    width: 764,
    alt: 'banner',
    quality: 85,
    height: 393,
    onlyImage: true,
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
    type: 'p',
    centerBlock: true,
    textCenter: true,
    pt: 100,
    lineHeight: 54,
    mb: 60,
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
    mt: 28,
};
