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
import { useEffect } from 'react';
import FiveWrap from './five-wrap';
import LazyLoad from 'react-lazyload';
import LazyComponent from '@Common/LazyComponent';

interface _homePageProps {
    t: object;
    locale: string;
    listBlogs: [];
}

const HomePageComponent: React.FC<_homePageProps> = ({ t, locale, listBlogs }) => {
    const router = useRouter();
    const count = useAppSelector((state: RootState) => state._indexState.count);
    const dispatch = useAppDispatch();

    const changeLanguage = e => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
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
            <Banner />
            <Divider mCol={90} />
            <SecondWrap />
            <LazyComponent offset={0} throttle={100}>
                <ThirdWrap />
            </LazyComponent>
            <Divider mCol={60} />
            <LazyComponent offset={0} throttle={100}>
                <FourthWrap />
            </LazyComponent>
            <Divider mCol={60} />
            <FiveWrap />
        </main>
    );
};
export default HomePageComponent;
