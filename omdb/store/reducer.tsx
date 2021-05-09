import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import * as types from './types'

interface Ratings {
  Source?: string
  Value?: string
}

export interface State {
  message: string
  list: types.list[]
  detail: types.Detail
}

const initialState = {
  message: 'HELLO WORLD',
  list: [],
  detail: {},
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
    
    case types.UPDATE_DETAIL:
      return { ...state, detail: action.payload }
  
    default:
      return state
  }
}