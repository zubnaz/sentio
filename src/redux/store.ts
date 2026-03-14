import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { geminiReducer } from "./slices/geminiSlice";

export const reducers = combineReducers({
    geminiReducer: geminiReducer
})

export const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;