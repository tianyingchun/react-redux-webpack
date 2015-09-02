import React, { Component } from 'react';
import PokedexApp from './PokedexApp';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

const finalCreateStore = compose(
  createStore
);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
        {() => <PokedexApp />}
        </Provider>
      </div>
    );
  }
}
