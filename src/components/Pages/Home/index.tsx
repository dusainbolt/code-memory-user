import { useAppSelector, useAppDispatch, RootState } from '@Redux/store';
import { _tValue } from '@Utils/index';
import Banner from '@Components/Pages/Home/banner';
import SecondWrap from './second-wrap';
import { Divider } from '@Common/Layout';
import ThirdWrap from './third-wrap';
import FourthWrap from './fourth-wrap';
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

    console.log("Change state => ", count, "LOCALE => ", _locale);


    const changeLanguage = e => {
        const locale = e.target.value;
        _changeLocale(locale);
        // dispatch(decrement());
    };

    useEffect(() => {
        dispatch(decrement());
    }, []);

    console.log(listBlogs);

    return (
        <main>
            <Banner />
            <Divider mCol={90} />
            <SecondWrap />
            <LazyComponent offset={0}>
                <ThirdWrap />
            </LazyComponent>
            <Divider mCol={60} />
            <LazyComponent offset={0}>
                <FourthWrap />
            </LazyComponent>
            <Divider mCol={60} />
            <LazyComponent offset={0}>
                <FiveWrap />
            </LazyComponent>
            <select onChange={changeLanguage} defaultChecked={_locale} className="text-white text-shadow-sm text-lg bg-transparent tracking-wide">
                <option className="text-black" selected={_locale === "vn"} value="vn">
                    VN
                </option>
                <option className="text-black" selected={_locale === "en"} value="en">
                    Eng
                </option>
            </select>
        </main>
    );
};
export default HomePageComponent;
