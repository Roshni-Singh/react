import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import todoShow from './components/todoShow';
import todoAdd from './components/todoAdd';
import todoEdit from './components/todoEdit';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// class List extends React.Component {
//   render() { return <div>Hey!</div> }
// }

// class Add extends React.Component {
//   render() {
//     return <div>Hello!</div>
//   }
// }

// class Edit extends React.Component {
//   render() {
//     return <div>Goodbye!</div>
//   }
// }

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/edit/:id' component={todoEdit} />
          <Route path='/add' component={todoAdd} />
          <Route path='/' component={todoShow} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
