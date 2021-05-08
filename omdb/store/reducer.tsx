import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import * as types from './types'

export interface State {
  message: string
  list: types.list[]
}

const initialState = {
  message: 'HELLO WORLD',
  list: []
}

export const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case types.UPDATE_MESSAGE:
      return { ...state, message: action.payload }
    
    case types.UPDATE_LIST:
      const newList = state.list.length ? state.list.concat(action.payload) : action.payload
      return { ...state, list: newList }
  
    default:
      return state
  }
}