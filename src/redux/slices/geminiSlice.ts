import { createSlice, type PayloadAction  } from "@reduxjs/toolkit";
import type { IGeminiInitialState } from "../../interfaces/initialStates/IGeminiInitialState";
import { sendMessageAsync } from "../actions/geminiActions";
import type { IChatMessage, IGeminiMessage } from "../../interfaces/general/general";

const initialState : IGeminiInitialState = {
    messages : [],
    currentMood : "friendly"
}

const geminiSlice = createSlice({
    name: "geminiSlice",
    initialState: initialState,
    reducers:{
        setUserMessage(state, action : {payload : IChatMessage}){
            state.messages = [...state.messages,action.payload];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(sendMessageAsync.fulfilled, (state, action:PayloadAction<IGeminiMessage>) => {
            state.currentMood = action.payload.emotion;
            state.messages = [...state.messages,{
                id: crypto.randomUUID(),
                text: action.payload.text,
                sender: action.payload.sender
            }];
            console.log("messages")
            console.log(state.messages)
        })
        .addCase(sendMessageAsync.rejected, (state, action)=>{
            console.log(action.payload ?? action.error);
        })
    }
});

export const geminiReducer = geminiSlice.reducer;
export const { setUserMessage } = geminiSlice.actions;