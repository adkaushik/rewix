import { HYDRATE } from 'next-redux-wrapper';

import { constants } from '../actions/preferences';

import { FLIX_DARK_THEME } from '../../themes';

const initialState = {
  theme: {
    active: FLIX_DARK_THEME
  },
  isEditMode: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case HYDRATE: {
    return { ...state, ...action.payload.preferences };
  }

  case constants.SET_THEME: {
    return {
      ...state,
      theme: {
        ...state.theme,
        active: action.payload
      }
    };
  }
  case constants.SET_EDIT_MODE: {
    return {
      ...state,
      isEditMode: action.payload
    };
  }

  default:
    return state;
  }
}

export default reducer;
