import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';

export function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(68, 83, 113, 0.12)',
        color: '#17324a',
      }}
    >
      <Toolbar sx={{ minHeight: 72 }}>
        <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 1.5, color: '#17324a' }}>
          <MenuRoundedIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="h1"
          sx={{
            flexGrow: 1,
            fontWeight: 800,
            letterSpacing: '0.18em',
            fontFamily: '"Nunito Sans", "Manrope", "Trebuchet MS", sans-serif',
          }}
        >
          SENTIO
        </Typography>

        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#56c588',
                border: '2px solid #fff',
              }}
            />
          }
        >
          <Avatar
            sx={{
              width: 38,
              height: 38,
              background: 'linear-gradient(135deg, #7cc6ff, #6fd8be)',
              fontWeight: 700,
            }}
          >
            S
          </Avatar>
        </Badge>
      </Toolbar>
    </AppBar>
  );
}
