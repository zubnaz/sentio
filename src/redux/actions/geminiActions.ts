import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IGeminiError, IGeminiRequest, IGeminiResponse } from "../../interfaces/general/general";
import axios, { AxiosError } from "axios";

export const sendMessageAsync = createAsyncThunk<string, IGeminiRequest, {rejectValue: IGeminiError}>(
    "gemini/send-message",
    async(request : IGeminiRequest, {rejectWithValue}) =>{
        try {
            const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",request,{
            headers: {
                       "x-goog-api-key": import.meta.env.VITE_GEMINI_KEY
            }
        });
        console.log("response from thunk");
        console.log(response.data)
        return (response.data as IGeminiResponse).candidates[0].content.parts[0].text;
        

        } catch (err : any) {
            let error : AxiosError<IGeminiError> = err;
                
                if(!error.response)
                     throw err;
                
                const data = error.response.data;
                const responseData : IGeminiError = typeof data === "object" && data != null ? data :
                 {code: error.response.status, message: error.response.statusText} as IGeminiError;

                return rejectWithValue(responseData);
        }
        
    }
)