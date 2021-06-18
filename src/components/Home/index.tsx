// import { useAppSelector, useAppDispatch } from '@Redux/store';
import InteractWrap from './interact-wrap';
import ServiceWrap from './service-wrap';
// import { useContext } from 'react';
// import useTranslation from '@Components/LanguageProvider/useTranslation';
// import { LanguageContext } from '@Components/LanguageProvider';
import FounderWrap from './founder-wrap';
import NewsWrap from './news-wrap';
// import { _RootState } from '@Redux/reducer/_rootReducer';
import HomeBanner from '@Components/Home/banner';
import { pluginChat } from '@Utils/func';
// interface _homePageProps {
//     t: object;
//     listBlogs: [];
// }

const HomePageComponent: React.FC<any> = () => {
    // const count = useAppSelector((state: _RootState) => state.indexReducer.count);
    // const dispatch = useAppDispatch();
    // const { t } = useTranslation();

    // const [_locale, _changeLocale] = useContext(LanguageContext);

    // const changeLanguage = e => {
    //     const locale = e.target.value;
    //     _changeLocale(locale);
    //     // dispatch(decrement());
    // };

    // useEffect(() => {}, []);
    // console.log('render home-page => ', count, _locale);

    return (
        <main>
            <HomeBanner />
            <InteractWrap />
            <ServiceWrap />
            <FounderWrap />
            <NewsWrap />
            <div id="fb-root"></div>
            {/* <!-- Your Plugin chat code -->  */}
            <div id="fb-customer-chat" className="fb-customerchat"></div>
            <script
                dangerouslySetInnerHTML={{
                    __html: pluginChat(),
                }}
            />
        </main>
    );
};
export default HomePageComponent;
