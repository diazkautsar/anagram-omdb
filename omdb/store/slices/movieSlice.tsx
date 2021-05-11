import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    updateList: (state, action: PayloadAction<list[]>) => {
      state.list = action.payload
    }
  }
})

export const { updateList } = movieSlice.actions

export default movieSlice.reducer