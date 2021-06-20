import { useRouter } from 'next/router';
import { FC } from 'react';
import { useEffect } from 'react';

const ErrorPage: FC<any> = () => {
    const route = useRouter();

    useEffect(() => {
        route.push('/404');
    }, []);
    return <div>Next stars:</div>;
};

export default ErrorPage;
