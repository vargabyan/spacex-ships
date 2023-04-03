import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: { value: number } = { 
  value: 0
}

export const listCountSlice = createSlice({
  name: 'listCountSlice',
  initialState,
  reducers: {
    setListCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { setListCount } = listCountSlice.actions
export default listCountSlice.reducer
