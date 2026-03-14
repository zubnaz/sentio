import { Box, Fade, Paper, Typography } from '@mui/material';

interface MoodPetCardProps {
  imageSrc: string;
  moodLabel: string;
}

export function MoodPetCard({ imageSrc, moodLabel }: MoodPetCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        width: 'min(460px, 100%)',
        p: { xs: 3, md: 4 },
        borderRadius: 8,
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.88)',
        border: '1px solid rgba(86, 102, 133, 0.16)',
        boxShadow: '0 18px 45px rgba(25, 49, 76, 0.12)',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          mb: 1.5,
          color: '#375a75',
          fontWeight: 700,
          fontFamily: '"Nunito Sans", "Manrope", sans-serif',
        }}
      >
        Your mood today
      </Typography>

      <Fade in key={moodLabel} timeout={420}>
        <Box
          component="img"
          src={imageSrc}
          alt={`Sentio mascot mood: ${moodLabel}`}
          sx={{
            width: { xs: 220, sm: 250, md: 280 },
            maxWidth: '100%',
            height: 'auto',
            filter: 'drop-shadow(0 14px 24px rgba(54, 102, 153, 0.22))',
            transition: 'filter 0.3s ease',
          }}
        />
      </Fade>

      <Typography
        sx={{
          mt: 2,
          color: '#4a6883',
          fontWeight: 600,
          textTransform: 'capitalize',
          fontFamily: '"Nunito Sans", "Manrope", sans-serif',
        }}
      >
        Current mood: {moodLabel}
      </Typography>
    </Paper>
  );
}
