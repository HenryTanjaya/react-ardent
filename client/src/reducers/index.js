import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import landingReducer from './landing_reducer';
const rootReducer = combineReducers({
  form:formReducer,
  auth:authReducer,
  landing:landingReducer,
});

export default rootReducer;
