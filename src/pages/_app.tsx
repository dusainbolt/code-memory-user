import { AppProps } from 'next/app';
import { FC, Fragment } from 'react';
import { wrapper } from '@Redux/store';

// load style lib
import 'antd/dist/antd.css';

// load style local
import '@Styles/_app.scss';
import { compose } from 'redux';
import { appWithTranslation } from 'next-i18next';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
};

// export default wrapper.withRedux(App);
export default compose(wrapper.withRedux, appWithTranslation)(App);
