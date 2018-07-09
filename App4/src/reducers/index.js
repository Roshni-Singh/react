import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DIYReducer from './reducer_DIY';

const rootReducer = combineReducers({
  DIYs: DIYReducer,
  form: formReducer
});

export default rootReducer;
