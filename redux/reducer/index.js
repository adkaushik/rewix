import { combineReducers } from 'redux';

import editor from './editor';
import pagebar from './pagebar';
import movie from './movie';
import modal from './modal';
import preferences from './preferences';

export default combineReducers({ 
  editor,
  pagebar,
  movie,
  modal,
  preferences
});