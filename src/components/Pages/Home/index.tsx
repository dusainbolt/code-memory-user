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

interface _homePageProps {
    t: object;
    locale: string;
    listBlogs: [];
}

const HomePageComponent: React.FC<_homePageProps> = ({ t, locale }) => {
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

    return (
        <main>
            <Banner />
            <Divider mCol={90} />
            <SecondWrap />
            <ThirdWrap />
            <Divider mCol={60} />
            <FourthWrap />
        </main>
    );
};
export default HomePageComponent;
