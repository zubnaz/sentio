import { createSlice, type PayloadAction  } from "@reduxjs/toolkit";
import type { IGeminiInitialState } from "../../interfaces/initialStates/IGeminiInitialState";
import { sendMessageAsync } from "../actions/geminiActions";
import type { IGeminiError, IGeminiMessage } from "../../interfaces/general/general";

const initialState : IGeminiInitialState = {
    geminiMessages : [],
    userMessages : []
}

const geminiSlice = createSlice({
    name: "geminiSlice",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(sendMessageAsync.fulfilled, (state, action:PayloadAction<IGeminiMessage>) => {
            console.log(action.payload);
        })
        .addCase(sendMessageAsync.rejected, (state, action)=>{
            console.log(action.payload ?? action.error);
        })
    }
});

export const geminiReducer = geminiSlice.reducer;