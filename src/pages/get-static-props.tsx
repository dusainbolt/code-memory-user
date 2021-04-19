// import Nav from '../components/nav';
import { Fragment } from 'react';
import { _tValue } from '@Utils/index';
import Meta from '@Components/Meta';
import HomePageComponent from '@Components/Pages/Home';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import { gql } from '@apollo/client';
import client from '@Services/apollo-connect';
import { getDataUsers } from '@Services/userRequest';

export default function IndexPage(props) {
    console.log(props);
    return (
        <Fragment>
            <Meta title={props.t.home.title_page} />
            <Header t={props.t} />
            GET STATIC PROPS PAGE
            {/* <HomePageComponent {...props} /> */}
            <Footer />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const { data: { users } } = await getDataUsers();
    return {
        props: {
            users: users,
        },
    };
}
