// import App from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactReduxContext }  from 'react-redux';

import { wrapper } from '../redux/store';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
          return (
            <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
              <Component {...pageProps} />
            </PersistGate>
          );
        }}
    </ReactReduxContext.Consumer>
  );
}

export default wrapper.withRedux(MyApp);
