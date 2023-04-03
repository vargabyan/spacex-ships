import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DataState {
  data: string,
  name: string,
  port: string,
  tasks: string,
  type: string,
  weight: string,
  id: string,
}

const initialState: { value: Array<DataState> } = { 
  value: []
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<Array<DataState>>) => {
      state.value = action.payload
    },
  },
})

export const { getData } = dataSlice.actions
export default dataSlice.reducer
