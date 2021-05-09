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
            <Meta title={"DAY LA TRANG ABOUT"} description="Sainbolt app - description about"/>
            <Header />
            {/* <HomePageComponent {...props} /> */}
            <Footer />
        </Fragment>
    );
}