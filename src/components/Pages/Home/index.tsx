import { useAppSelector, useAppDispatch, RootState } from '@Redux/store';
import { _tValue } from '@Utils/index';
import InteractWrap from './interact-wrap';
import { Divider } from '@Common/Layout';
import ServiceWrap from './service-wrap';
import { useContext, useEffect } from 'react';
import LazyComponent from '@Common/Lazy/LazyComponent';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { LanguageContext } from '@Components/LanguageProvider';
import FounderWrap from './founder-wrap';
import NewsWrap from './news-wrap';
import { decrement } from '@Redux/reducer/indexReducer';
import { _RootState } from '@Redux/reducer/_rootReducer';
import HomeBanner from '@Components/Pages/Home/banner';

interface _homePageProps {
    t: object;
    listBlogs: [];
}

const HomePageComponent: React.FC<_homePageProps> = ({ listBlogs = [] }) => {
    const count = useAppSelector((state: _RootState) => state.indexReducer.count);
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

    console.log('render home-page => ', count, _locale);

    return (
        <main>
            <HomeBanner />
            {/* <LazyComponent offs
            et={40}> */}
            <InteractWrap />
            <ServiceWrap />
            <FounderWrap />
            <NewsWrap />
            {/* </LazyComponent> */}
            {/* <Divider mCol={30} />>
            </LazyComponent>
            <Divider mCol={60} />
                <ServiceWrap />
            <Divider mCol={60} />
            <LazyComponent offset={40}>
            </LazyComponent>
            */}
        </main>
    );
};
export default HomePageComponent;
