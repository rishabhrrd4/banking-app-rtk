import { configureStore } from "@reduxjs/toolkit"
import bankReducer from "../features/bank/bankSlice"

const store = configureStore({
    reducer: {
        bank: bankReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 