import { _Box, _ListItem } from '@Common/Layout/index';
import { _Typography } from '@Common/Typography/index';

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
    pt: 128,
    color: 'white',
    fontSize: 44,
    textCenter: true,
    centerBlock: true,
    maxWidth: 556,
};

export const buttonSendEmail: _Typography = {
    height: 78,
    radius: 50,
    maxWidth: 200,
};

export const itemMenuFooter: _ListItem = {
    fontSize: 16,
    fontWeight: 'medium-xl',
    align: 'center',
    mRow: 20,
    pCol: 4,
};
