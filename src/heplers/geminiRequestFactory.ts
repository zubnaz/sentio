import type { IGeminiRequest } from "../interfaces/general/general";

export class GeminiRequestFactory{
    static CreateRequest(text:string) : IGeminiRequest {
        return {
            contents:[
                {
                    parts:[
                        {
                            text: text
                        }
                    ]
                }
            ]
        }
    }
}