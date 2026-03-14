import { Stack } from '@mui/material';
import type { ChatMessage } from '../../types/chat';
import { ChatMessageBubble } from './ChatMessageBubble';

interface ChatMessageListProps {
  messages: ChatMessage[];
}

export function ChatMessageList({ messages }: ChatMessageListProps) {
  return (
    <Stack
      spacing={1.5}
      sx={{
        flex: 1,
        minHeight: 280,
        maxHeight: { xs: 360, md: 'calc(100vh - 315px)' },
        overflowY: 'auto',
        pr: 0.5,
        mb: 2,
      }}
    >
      {messages.map((message) => (
        <ChatMessageBubble key={message.id} message={message} />
      ))}
    </Stack>
  );
}
