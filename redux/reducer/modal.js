import { HYDRATE } from 'next-redux-wrapper';

import { constants } from '../actions/modal';

const initialState = {
  moviePreview: {
    show: false
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case HYDRATE: {
    return { ...state, ...action.payload.movie };
  }

  case constants.SET_SHOW_MODAL: {
    return {
      ...state,
      [action.payload.name]: {
        show: action.payload.value
      }
    };
  }

  default:
    return state;
  }
}

export default reducer;
