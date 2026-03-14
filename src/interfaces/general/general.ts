export interface IMessage{
    message:string;
}
export interface IGeminiMessage extends IMessage{ 
    emotion: "smile" | "happy" | "sad" | "angry" | "friendly"
}
export interface IGeminiRequest{
    contents : IGeminiContent[]
}
export interface IGeminiContent{
    parts : IGeminiPart[]
}
export interface IGeminiPart{
    text: string
}
export interface IGeminiError{
    code: number,
    message: string
}
export interface IGeminiResponse{
    candidates: IGeminiCandidat[];
}
export interface IGeminiCandidat{
    content: IGeminiContent
}