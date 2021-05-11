import { AnyAction } from 'redux'

type list = {
  imdbID?: string,
  Title?: string,
  Type?: string,
  Year?: string
}

export interface State {
  list: list[]
}

const initialState: State = {
  list: []
}

export default function movieReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'movie/updateList':
      return { ...state, list: action.payload }
    
    default:
      return { ...state }
  }
}