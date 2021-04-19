import Footer from '@Components/Footer';
import Meta from '@Components/Meta';
import { getLocale } from '@Config/locale';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const Error = ({ statusCode }) => {
    const router = useRouter();
    const { locale } = router;
    const t = getLocale(locale);
    
    return (
        <Fragment>
            <Meta title={t.home.title_page} />
            {/* <Header /> */}
            <p>{statusCode ? statusCode : t.home.title_page}</p>
            <Footer />
        </Fragment>
    );
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
