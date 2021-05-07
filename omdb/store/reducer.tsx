import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import * as types from './types'

export interface State {
  message: string
}

const initialState = {
  message: 'HELLO WORLD'
}

export const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case types.UPDATE_MESSAGE:
      return { ...state, message: action.payload }
  
    default:
      return state
  }
}