// @flow

import { SAY_HELLO } from '../action/hello'

const initialState = {
  message: 'Initial reducer message',
}

const helloReducer = (state: {message: string} = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      return Object.assign({}, state, {
        message: action.payload,
      })
    default:
      return state
  }
}

export default helloReducer
