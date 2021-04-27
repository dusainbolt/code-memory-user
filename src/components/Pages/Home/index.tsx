import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch, RootState } from '@Redux/store';
import { decrement } from '@Redux/reducer/indexReducer';
import { _tValue } from '@Utils/index';
import { actions } from '@Redux/actions/index';
import Banner from '@Components/Pages/Home/banner';
import SecondWrap from './second-wrap';
import { Divider } from '@Common/Layout';
import ThirdWrap from './third-wrap';
import FourthWrap from './fourth-wrap';
import { useContext, useEffect } from 'react';
import FiveWrap from './five-wrap';
import LazyComponent from '@Common/Lazy/LazyComponent';
import { LanguageContext } from '@Components/LanguageProvider';
import useTranslation from '@Components/LanguageProvider/useTranslation';

interface _homePageProps {
    t: object;
    locale: string;
    listBlogs: [];
}

const HomePageComponent: React.FC<_homePageProps> = ({ listBlogs = [] }) => {
    const router = useRouter();
    const count = useAppSelector((state: RootState) => state._indexState.count);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    console.log("Change state => ", count);

    const [locale, changeLocale] = useContext(LanguageContext);

    const changeLanguage = e => {
        const locale = e.target.value;
        changeLocale(locale);
        dispatch(decrement());
        dispatch(actions.getDemo({ data: 'HELLO' }));
    };

    const onTestDispatchSaga = () => {
        dispatch(actions.getDemo({ data: 'HELLO' }));
    };

    useEffect(() => {
        dispatch(actions.getDemo({ data: 'HELLO' }));
    }, []);

    console.log(listBlogs);

    return (
        <main>
            <Divider mCol={90} />
            <SecondWrap />
            <LazyComponent offset={0}>
                <ThirdWrap />
            </LazyComponent>
            {/* <Divider mCol={60} />
            <LazyComponent offset={0}>
                <FourthWrap />
            </LazyComponent>
            <Divider mCol={60} />
            <LazyComponent offset={0}>
                <FiveWrap />
            </LazyComponent> */}
            <select onChange={changeLanguage} defaultValue={locale} className="text-white text-shadow-sm text-lg bg-transparent tracking-wide">
                <option className="text-black" value="vn">
                    VN
                </option>
                <option className="text-black" value="eng">
                    Eng
                </option>
            </select>
        </main>
    );
};
export default HomePageComponent;
