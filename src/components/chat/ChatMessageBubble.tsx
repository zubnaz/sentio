import { Box, Typography } from '@mui/material';
import type { IChatMessage } from '../../interfaces/general/general';


interface ChatMessageBubbleProps {
  message: IChatMessage;
}

export function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  const isUser = message.sender === 'user';

  return (
    <Box
      sx={{
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        maxWidth: '84%',
        px: 2,
        py: 1.25,
        borderRadius: 3,
        color: isUser ? '#143c5c' : '#28435d',
        background: isUser
          ? 'linear-gradient(145deg, #daf5f2 0%, #d3e9ff 100%)'
          : 'linear-gradient(145deg, #f3f7ff 0%, #f0f9ff 100%)',
        boxShadow: '0 6px 14px rgba(28, 53, 89, 0.08)',
        border: '1px solid rgba(85, 103, 140, 0.14)',
      }}
    >
      <Typography sx={{ fontFamily: '"Nunito Sans", "Manrope", sans-serif' }}>{message.text}</Typography>
    </Box>
  );
}
