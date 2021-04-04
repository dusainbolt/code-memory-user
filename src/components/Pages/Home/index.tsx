import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch, RootState } from '@Redux/store';
import { decrement } from '@Redux/reducer/indexReducer';
import { _tValue } from '@Utils/index';
import { actions } from '@Redux/actions/index';
import Banner from '@Common/Banner';

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
            <div className="test row">
                <div className="col-lg-3">HELLO</div>
                <div className="col-lg-3">HELLO</div>
                <div className="col-lg-3">HELLO</div>
                <div className="col-lg-3">HELLO</div>
            </div>
        </main>
    );
};
export default HomePageComponent;
