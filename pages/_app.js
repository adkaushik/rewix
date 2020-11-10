// import App from 'next/app';
import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactReduxContext, useSelector, useDispatch } from 'react-redux';

import { wrapper } from '../redux/store';
import { ThemeContext, FLIX_DARK_THEME, FLIX_LIGHT_THEME, getActiveTheme } from '../themes';

import PrimaryButton from '../components/buttons/PrimaryButton';
import { setEditMode } from '../redux/actions/preferences';

import '../styles/globals.css'

const Header = () => {

  const dispatch = useDispatch();
  const isEditMode = useSelector(state => state.preferences.isEditMode);

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div style={{ backgroundColor: theme.background, width: '100%', height: '80px', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
          <span style={{ color: theme.foreground, fontSize: '30px', fontWeight: 600 }} >Header</span>
          <PrimaryButton onClick={() => dispatch(setEditMode(!isEditMode))}>
            Toggle Edit Mode
        </PrimaryButton>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

function MyApp({ Component, pageProps }) {

  const activeTheme = useSelector(store => store.preferences.theme.active);

  const theme = getActiveTheme(activeTheme);

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        return (
          <PersistGate persistor={store.__persistor}>
            <ThemeContext.Provider value={{ theme }}>
              <div style={{ flexDirection: 'column', backgroundColor: theme.background }}>
                <Component {...pageProps} />
                <Header />
              </div>
            </ThemeContext.Provider>
          </PersistGate>
        );
      }}
    </ReactReduxContext.Consumer>
  );
}

export default wrapper.withRedux(MyApp);
