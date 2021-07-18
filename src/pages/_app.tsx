import { AppContext, AppProps } from 'next/app';
import { FC, Fragment } from 'react';
import { wrapper } from '@Redux/store';
import { END } from 'redux-saga';

// load style lib
import 'antd/dist/antd.css';

// load style local
import '@Styles/_app.scss';



const CodeMemory: FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <Fragment>
            <Component {...pageProps} />
        </Fragment>

    );
};

export const getInitialProps = async ({ Component, ctx }: AppContext) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
        ctx.store.dispatch(END);
        await ctx.store.sagaTask.toPromise();
    }


    // 3. Return props
    return {
        pageProps,
    };
};

export default wrapper.withRedux(CodeMemory);
