// @flow

// import Immutable from 'immutable'
// import type { fromJS as Immut } from 'immutable'

import {
  SAY_HELLO,
  SAY_HELLO_ASYNC_REQUEST,
  SAY_HELLO_ASYNC_SUCCESS,
  SAY_HELLO_ASYNC_FAILURE,
} from '../action/hello'

// const initialState = Immutable.fromJS({
//   message: 'Initial reducer message',
//   messageAsync: 'Initial reducer message for async call',
// })

const initialState = {
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
}

const helloReducer =
(state: { message: string, messageAsync: string } = initialState,
  action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      return Object.assign({}, state, {
        message: action.payload,
      })
      // return state.set('message', action.payload)
    case SAY_HELLO_ASYNC_REQUEST:
      return Object.assign({}, state, {
        messageAsync: 'Loading...',
      })
      // return state.set('messageAsync', 'Loading...')
    case SAY_HELLO_ASYNC_SUCCESS:
      return Object.assign({}, state, {
        messageAsync: action.payload,
      })
      // return state.set('messageAsync', action.payload)
    case SAY_HELLO_ASYNC_FAILURE:
      return Object.assign({}, state, {
        messageAsync: 'No message received, please check your connection',
      })
      // return state.set('messageAsync', 'No message received, please check your connection')
    default:
      return state
  }
}

export default helloReducer
