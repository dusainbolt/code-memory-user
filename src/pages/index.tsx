// import Nav from '../components/nav';
import { Fragment, useContext } from 'react';
import { _tValue } from '@Utils/index';
import Meta from '@Components/Meta';
import HomePageComponent from '@Components/Pages/Home';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import IconTheme from '@Common/IconTheme';
import { getDataUsers } from '@Services/userRequest';
import useTranslation from '@Components/LanguageProvider/useTranslation';
import { LanguageContext } from '@Components/LanguageProvider';

export default function IndexPage(props) {
    const { t } = useTranslation();
    return (
        <Fragment>
            <Meta title={t('home.title_page')} />
            <HomePageComponent {...props} />
            <Footer />
            <IconTheme />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    return {
        props: { listBlogs: "heloo" }, // will be passed to the page component as props
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
