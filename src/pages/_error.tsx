import Error from 'next/error';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// export async function getStaticProps() {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js');
//     const errorCode = res.ok ? false : 404;
//     const json = await res.json();

//     return {
//         props: { errorCode, stars: json.stargazers_count },
//     };
// }

export default function Page({ errorCode, stars }) {
    const route = useRouter();

    useEffect(() => {
        route.push('/404');
    }, []);

    if (errorCode) {
        return <Error statusCode={errorCode} />;
    }

    return <div>Next stars: {stars}</div>;
}
