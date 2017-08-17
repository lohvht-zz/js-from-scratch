// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../client/reducer/hello'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello) {
    // We disable flow for the next 2 lines
    // flow-disable-next-line
    preloadedState.hello = Object.assign(
      {},
      // flow-disable-next-line
      helloReducer(undefined, {}),
      plainPartialState.hello,
    )
    // preloadedState.hello = helloReducer(undefined, {})
    //   .merge(Immutable.fromJS(plainPartialState.hello))
  }

  return createStore(combineReducers({ hello: helloReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
