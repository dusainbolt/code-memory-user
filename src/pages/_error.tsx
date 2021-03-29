import { getLocale } from '@Config/locale';
import { useRouter } from 'next/router';

const Error = ({ statusCode }) => {
    const router = useRouter();
    const { locale } = router;
    const t = getLocale(locale);
    return <p>{statusCode ? statusCode : t.p2}</p>;
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
