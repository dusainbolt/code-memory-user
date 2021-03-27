import React from 'react';
import { _IndexReducer } from '@Redux/reducer/indexReducer';
import { TFunction } from 'next-i18next';

interface _SecondPage {
    readonly t: TFunction;
}

const SecondPage: React.FC<_SecondPage> = ({ t }) => {

    return (
        <main id="__app_index">
            <div>PAGE 2 PAGE 2 PAGE 2 PAGE2 PAGE 2</div>
        </main>
    );
};

export default SecondPage;
