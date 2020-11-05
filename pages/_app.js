// import App from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactReduxContext } from 'react-redux';

import { wrapper } from '../redux/store';

import '../styles/globals.css'

const Header = () => {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', width: '100%', height: '100px', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
      <span style={{ color: 'white', fontSize: '30px', fontWeight: 600 }} >Header</span>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
          return (
            <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
                <div style={{ flexDirection: 'column' }}>
                  <Component {...pageProps} />
                  <Header />
                </div>
            </PersistGate>
          );
        }}
    </ReactReduxContext.Consumer>
  );
}

export default wrapper.withRedux(MyApp);
