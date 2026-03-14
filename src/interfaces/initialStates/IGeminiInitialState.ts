import type { IGeminiMessage, IMessage } from "../general/general";

export interface IGeminiInitialState{
    geminiMessages: IGeminiMessage[];
    userMessages: IMessage[];
}