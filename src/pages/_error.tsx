import Footer from '@Components/Footer';
import Header from '@Components/Header';
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
            <Meta title={t.subtitle} />
            {/* <Header /> */}
            <p>{statusCode ? statusCode : t.p2}</p>
            <Footer />
        </Fragment>
    );
};
// Error.getInitialProps = async ({ res, err }) => {
//     let statusCode = null;
//     if (res) {
//         ({ statusCode } = res);
//     } else if (err) {
//         ({ statusCode } = err);
//     }
// };

export default Error;
