export type MoodType = 'happy' | 'sad' | 'angry' | 'smile' | 'friendly';

export type ChatSender = 'user' | 'sentio';

export interface ChatMessage {
  id: number;
  sender: ChatSender;
  text: string;
}
