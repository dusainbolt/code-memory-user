// import Nav from '../components/nav';
import { Fragment } from 'react';
import { _tValue } from '@Utils/index';
import Meta from '@Components/Meta';
import HomePageComponent from "@Components/Pages/Home";
import Header from '@Components/Header';
import Footer from '@Components/Footer';

export default function IndexPage(props) {
    return (
        <Fragment>
            <Meta title={props.t.home.title_page}/>
            <Header t={props.t}/>
            <HomePageComponent {...props} />
            <Footer />
        </Fragment>
    );
}

// export const getServerSideProps = async () => {
//     return {
//         props: {}, // will be passed to the page component as props
//     }
// };
