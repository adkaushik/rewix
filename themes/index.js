import * as React from 'react';

export const FLIX_LIGHT_THEME = 'flixLight';
export const FLIX_DARK_THEME = 'flixDark';

export const themes = {
  flixDark: {
    primary: '#db0000', // red
    background: '#000000', // black
    foreground: '#ffffff', // white
    divider: '#564d4d', // grey
    secondary: '#831010' // maroon

  },
  flixLight: {
    primary: '#db0000',
    background: '#ffffff',
    foreground: '#000000',
    secondary: '#564d4d',
    divider: '#831010'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.flixDark // default value
});

export const getActiveTheme = activeThemeName => themes[activeThemeName];
