import { _Button } from '@Common/Button';
import { _Box, _ListItem } from '@Common/Layout/index';
import { _Typography } from '@Common/Typography/index';

export const footerCopyRight: _Box = {
    letterSpacing: 1,
    pt: 6,
    height: 32,
    align: 'center',
};

export const footerMenu: _Box = {
    container: true,
    className: 'footer-menu',
    flexBox: true,
    mt: 80,
    pb: 30,
};

export const itemContact: _ListItem = {
    flexBox: true,
    circle: true,
    mRow: 30,
};

export const boxContact: _Box = {
    centerBlock: true,
    pRow: 38,
    pCol: 20,
    flexBox: true,
    justify: 'space',
    mt: 72,
    background: 'white',
    maxWidth: 790,
    radius: 60,
};

export const titleFooter: _Typography = {
    type: 'h4',
    fontWeight: 'bold',
    pt: 100,
    color: 'white',
    fontSize: 40,
    textCenter: true,
    centerBlock: true,
    maxWidth: 556,
};

export const buttonSendEmail: _Button = {
    height: 78,
    radius: 50,
    maxWidth: 200,
    submit: true,
};

export const itemMenuFooter: _ListItem = {
    fontSize: 16,
    fontWeight: 'medium-xl',
    align: 'center',
    mRow: 20,
    pCol: 4,
};
