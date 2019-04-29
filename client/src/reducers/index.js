import { combineReducers } from 'redux';
import recordReducer from "./recordReducer";
// import { errorReducer } from "./errorReducer";
// import { authReducer } from "./authReducer";


export default combineReducers({
  record: recordReducer,
  // error: errorReducer,
  // auth: authReducer
})