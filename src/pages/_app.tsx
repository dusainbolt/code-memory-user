import { AppProps } from 'next/app';
import { FC } from 'react';
import { wrapper } from '@Redux/store';

// load style lib
import 'antd/dist/antd.css';

// load style local
import '@Styles/_app.scss';
import { compose } from 'redux';
import { appWithTranslation } from 'next-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

const App: FC<AppProps> = ({ Component, pageProps, ...props }) => {
  // console.log(props);
  const store = useStore();
  const isClient = typeof window !== 'undefined';

  return isClient ? (
    <PersistGate persistor={(store as any).__persistor} loading={null}>
      <Component {...pageProps} />
    </PersistGate>
  ) : (
    <Component {...pageProps} />
  );
};

// export default wrapper.withRedux(App);
export default compose(wrapper.withRedux, appWithTranslation)(App);
