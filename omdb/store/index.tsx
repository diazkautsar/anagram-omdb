import { createStore, applyMiddleware } from 'redux'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer, State } from './reducer'
import thunkMiddleware from 'redux-thunk'

export const makeStore: MakeStore<State> = (context: Context) => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export const wrapper = createWrapper<State>(makeStore, { debug: true })