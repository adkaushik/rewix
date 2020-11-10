export const constants = {
  SET_THEME: 'preferences/SET_THEME',
  SET_EDIT_MODE: 'preferences/SET_EDIT_MODE',
};

export const setTheme = (theme) => ({
  type: constants.SET_THEME,
  payload: theme
});

export const setEditMode = (isEditMode) => ({
  type: constants.SET_EDIT_MODE,
  payload: isEditMode
});

export default {
  setTheme,
  setEditMode
};
