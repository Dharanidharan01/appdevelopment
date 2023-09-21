// src/redux/reducers.js
import { combineReducers } from 'redux';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  // Add other reducers here if needed
});

export default rootReducer;
