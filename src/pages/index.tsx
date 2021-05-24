// import Nav from '../components/nav';
import { Fragment } from 'react';
import { _tValue } from '@Utils/index';
import Meta from '@Components/Meta';
import HomePageComponent from '@Components/Pages/Home';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import IconSetting from '@Common/IconApp/IconSetting';

import 'swiper/swiper.min.css';

export default function IndexPage(props) {
    return (
        <Fragment>
            <Meta />
            <Header />
            <HomePageComponent {...props} />
            <Footer />
            <IconSetting />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    return {
        props: { listBlogs: 'heloo' }, // will be passed to the page component as props
    };
}

// export async function getServerSideProps() {
//     const {
//         data: { users },
//     } = await getDataUsers();
//     return {
//         props: {
//             users: users,
//         },
//     };
// }
