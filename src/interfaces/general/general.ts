import type { ChatSender, MoodType } from "../../types/chat";

export interface IMessage{
    message:string;
}
export interface IGeminiMessage extends IChatMessage{ 
    emotion: MoodType
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
export interface IChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
}