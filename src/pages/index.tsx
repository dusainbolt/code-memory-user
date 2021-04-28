// import Nav from '../components/nav';
import { Fragment } from 'react';
import { _tValue } from '@Utils/index';
import Meta from '@Components/Meta';
import HomePageComponent from '@Components/Pages/Home';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import IconTheme from '@Common/IconApp/IconTheme';
import IconLanguage from '@Common/IconApp/IconLanguage';
import Dropdown from '@Common/Dropdown';

export default function IndexPage(props) {
    const { t } = useTranslation();
    return (
        <Fragment>
            {/* <Dropdown /> */}
            <Meta title={t('home.title_page')} />
            <Header />
            <HomePageComponent {...props} />
            <Footer />
            <IconLanguage />
            <IconTheme />
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
