import { combineReducers } from 'redux';
import { itemReducer } from "./recordReducer";

export default combineReducers({
  item: itemReducer,
})