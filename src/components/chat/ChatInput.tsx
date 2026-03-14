import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { IconButton, InputAdornment, TextField } from '@mui/material';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  return (
    <TextField
      fullWidth
      value={value}
      placeholder="Tell me how you are feeling..."
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          onSend();
        }
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 4,
          backgroundColor: '#fff',
          fontFamily: '"Nunito Sans", "Manrope", sans-serif',
          boxShadow: '0 8px 20px rgba(43, 65, 96, 0.08)',
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={onSend}
              aria-label="send message"
              sx={{
                background: 'linear-gradient(135deg, #66c9b5 0%, #67a7ff 100%)',
                color: '#fff',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4db89f 0%, #4e95f7 100%)',
                },
              }}
            >
              <SendRoundedIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
