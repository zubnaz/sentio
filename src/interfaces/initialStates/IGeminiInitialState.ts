import type { MoodType } from "../../types/chat";
import type { IChatMessage} from "../general/general";

export interface IGeminiInitialState{
    messages: IChatMessage[];
    currentMood: MoodType
}