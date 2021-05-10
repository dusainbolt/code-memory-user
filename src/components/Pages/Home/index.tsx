import { useAppSelector, useAppDispatch, RootState } from '@Redux/store';
import { _tValue } from '@Utils/index';
import Banner from '@Components/Pages/Home/banner';
import InteractWrap from './interact-wrap';
import { Divider } from '@Common/Layout';
import ServiceWrap from './service-wrap';
import { useContext, useEffect } from 'react';
import FiveWrap from './five-wrap';
import LazyComponent from '@Common/Lazy/LazyComponent';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { LanguageContext } from '@Components/LanguageProvider';
import { decrement } from '@Redux/reducer/indexReducer';

interface _homePageProps {
    t: object;
    listBlogs: [];
}

const HomePageComponent: React.FC<_homePageProps> = ({ listBlogs = [] }) => {
    const count = useAppSelector((state: RootState) => state._indexReducer.count);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const [_locale, _changeLocale] = useContext(LanguageContext);

    const changeLanguage = e => {
        const locale = e.target.value;
        _changeLocale(locale);
        // dispatch(decrement());
    };

    useEffect(() => {
        // dispatch(decrement());
    }, []);

    console.log("render home-page => ", _locale);

    return (
        <main>
            <Banner />
            <Divider mCol={30} />
            <LazyComponent offset={40}>
                <InteractWrap />
            </LazyComponent>
            <Divider mCol={60} />
            <LazyComponent offset={40}>
                <ServiceWrap />
            </LazyComponent>
            <Divider mCol={60} />
            <LazyComponent offset={40}>
                <FiveWrap />
            </LazyComponent>
        </main>
    );
};
export default HomePageComponent;
