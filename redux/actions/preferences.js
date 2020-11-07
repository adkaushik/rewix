export const constants = {
  SET_THEME: 'preferences/SET_THEME',
};

export const setTheme = (theme) => ({
  type: constants.SET_THEME,
  payload: theme
});

export default {
  setTheme
};
