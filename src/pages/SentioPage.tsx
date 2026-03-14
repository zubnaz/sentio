import { useMemo, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ChatInput } from '../components/chat/ChatInput';
import { ChatMessageList } from '../components/chat/ChatMessageList';
import { Header } from '../components/layout/Header';
import { MoodPetCard } from '../components/pet/MoodPetCard';
import { initialMessages } from '../data/initialMessages';
import type { ChatMessage } from '../types/chat';
import { detectMood } from '../utils/detectMood';
import { defaultMood, moodImageMap, moodReplies } from '../utils/moodConfig';

export function SentioPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [currentMood, setCurrentMood] = useState(defaultMood);
  const [inputValue, setInputValue] = useState('');

  const currentPetImage = useMemo(() => moodImageMap[currentMood], [currentMood]);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text,
    };

    const mood = detectMood(text);

    setMessages((prev) => [...prev, userMessage]);
    setCurrentMood(mood);
    setInputValue('');

    window.setTimeout(() => {
      const sentioReply: ChatMessage = {
        id: Date.now() + 1,
        sender: 'sentio',
        text: moodReplies[mood],
      };

      setMessages((prev) => [...prev, sentioReply]);
    }, 300);
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(180deg, #fcfffe 0%, #f4f8ff 100%)' }}>
      <Header />

      <Box
        sx={{
          minHeight: 'calc(100vh - 72px)',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        }}
      >
        <Box
          sx={{
            p: { xs: 2.5, md: 4 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              'radial-gradient(circle at 20% 20%, rgba(104, 212, 180, 0.3), transparent 52%), radial-gradient(circle at 80% 85%, rgba(125, 178, 255, 0.26), transparent 48%), linear-gradient(145deg, #f8fffd 0%, #eef4ff 100%)',
          }}
        >
          <MoodPetCard imageSrc={currentPetImage} moodLabel={currentMood} />
        </Box>

        <Box
          sx={{
            p: { xs: 2.5, md: 4 },
            display: 'flex',
            alignItems: 'stretch',
            background: 'linear-gradient(180deg, #f9fcff 0%, #f4f7fd 100%)',
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: '100%',
              borderRadius: 8,
              p: { xs: 2.5, md: 3.5 },
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(94, 113, 153, 0.16)',
              boxShadow: '0 16px 38px rgba(36, 57, 90, 0.1)',
              background: 'rgba(255, 255, 255, 0.94)',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 2.5,
                color: '#17324a',
                fontWeight: 800,
                fontSize: { xs: '1.55rem', md: '2rem' },
                lineHeight: 1.2,
                fontFamily: '"Nunito Sans", "Manrope", "Trebuchet MS", sans-serif',
              }}
            >
              Hi, I am Sentio! How was your day?
            </Typography>

            <ChatMessageList messages={messages} />
            <ChatInput value={inputValue} onChange={setInputValue} onSend={handleSend} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
