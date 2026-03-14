import { createSlice, type PayloadAction  } from "@reduxjs/toolkit";
import type { IGeminiInitialState } from "../../interfaces/initialStates/IGeminiInitialState";
import { sendMessageAsync } from "../actions/geminiActions";

const initialState : IGeminiInitialState = {
    geminiMessages : [],
    userMessages : []
}

const geminiSlice = createSlice({
    name: "geminiSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(sendMessageAsync.fulfilled, (state, action:PayloadAction<string>) => {
            console.log("response text")
            console.log(action.payload);
        })
    }
});

export const geminiReducer = geminiSlice.reducer;