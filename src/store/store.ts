import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "../features/bank/bankSlice";
import apiReducer from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    bank: bankReducer,
    api: apiReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
