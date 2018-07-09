import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import main from './components/main';
import explore from './components/explore';
import add from './components/add';
import showDIY from './components/showDIY';
import edit from './components/edit';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/explore' component={explore} />
          <Route path='/showDIY' component={showDIY} />
          <Route path='/edit' component={edit} />
          <Route path='/add' component={add} />
          <Route path='/' component={main} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
