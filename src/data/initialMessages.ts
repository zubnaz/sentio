import type { IChatMessage } from '../interfaces/general/general';

export const initialMessages: IChatMessage[] = [
  {
    id: crypto.randomUUID(),
    sender: 'sentio',
    text: 'Hi! I am glad to see you. Tell me how you are today?',
  },
];
