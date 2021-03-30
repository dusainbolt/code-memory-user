import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch, RootState } from '@Redux/store';
import { decrement } from '@Redux/reducer/indexReducer';
import { _tValue } from '@Utils/index';
import { actions } from '@Redux/actions/index';
import Meta from '@Components/Meta';
import Link from 'next/link';
import { _homePageProps } from '@Config/models';


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
            {/* <ViewSource /> */}
        CONTENT          
        </main>
    );
}
export default HomePageComponent;