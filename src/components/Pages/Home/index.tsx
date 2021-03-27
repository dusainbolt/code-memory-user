import React, { useEffect } from 'react';
import { i18n, Link } from '@I18n/index';
import { useDispatch } from 'react-redux';
import Button from '@Common/Button';
import Collapsible from '@Common/Callapsible';
import { TFunction } from 'next-i18next';
import Banner from '@Common/Banner';

interface IProps {
    readonly t: TFunction;
}

const HomePage: React.FC<IProps> = ({ t }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_INIT_INDEX', data: 'DAY LA DATA' });
    }, []);

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'vn' ? 'en' : 'vn');
    };

    return (
        <main id="__app_index">
            HOME
            <Banner t={t} title={'TITLE'} text={'TEXT'} />

            {/* <div className="container">
                <Button
                    label={t('cm_description', { ababa: 'text props' })}
                    onClick={changeLanguage}
                />
                <Button
                    link
                    href="/second-page"
                    label={t('cm_description')}
                    outline
                    round
                />
            </div>
            <Collapsible description={'DESCRIPTION'} title="TITLE COLLAPSE" />
            <div className="message">message</div>
            <div className="message success">My message error</div>
            <div className="message error">My message success</div> */}
        </main>
    );
};

export default HomePage;
