import type { IGeminiRequest } from "../interfaces/general/general";
import { GeminiPromptFactory } from "./geminiPromptFactory";

export class GeminiRequestFactory{
    static CreateRequest(text:string) : IGeminiRequest {
        return {
            contents:[
                {
                    parts:[
                        {
                            text: GeminiPromptFactory.CreatePrompt(text)
                        }
                    ]
                }
            ]
        }
    }
}