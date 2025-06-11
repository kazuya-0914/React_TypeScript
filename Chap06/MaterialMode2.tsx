import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';
import { CssBaseline, Button, useMediaQuery } from '@mui/material';
import type { PaletteMode } from '@mui/material';

export default function Material() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const toggleMode = () => setMode(prev =>
    prev === 'light' ? 'dark' : 'light'
  );
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
      ? {
          primary: amber,
        }
      : {
        primary: {
          main: grey[500],
          contrastText: '#fff'
        },
        background: {
          default: grey[900],
          paper: grey[900],
        },
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" onClick={toggleMode}>
        Mode {mode}
      </Button>
    </ThemeProvider>
  );
}