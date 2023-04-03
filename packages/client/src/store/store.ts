import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../reducers/dataSlice'
import listCountSlice from '../reducers/listCountSlice'

export const store = configureStore({
  reducer: {data: dataSlice, listCount: listCountSlice},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
