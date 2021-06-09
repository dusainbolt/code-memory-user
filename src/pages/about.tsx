// import Nav from '../components/nav';
import { Fragment } from 'react';
import Meta from '@Components/Meta';
import Header from '@Components/Header';
import Footer from '@Components/Footer';

export default function IndexPage(props) {
  return (
    <Fragment>
      <Meta title={'DAY LA TRANG ABOUT'} description="Sainbolt app - description about" />
      <Header />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: { listBlogs: 'heloo' }, // will be passed to the page component as props
  };
}
