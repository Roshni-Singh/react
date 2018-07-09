import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TodoReducer from './reducer_todo';

const rootReducer = combineReducers({
  todos: TodoReducer,
  form: formReducer
});

export default rootReducer;
