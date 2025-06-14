import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';
import { CssBaseline, PaletteMode } from "@mui/material";
import ThemeContext from "./ThemeContext";

type Props = {
  children: React.ReactNode;
}

export default function MyThemeProvider({ children }: Props) {
  const [mode, setMode] = useState<PaletteMode>('light');
  const themeConfig  = {
    mode,
    toggleMode: () => {
      setMode(prev =>
        prev === 'light' ? 'dark' : 'light'
      );
    }
  };
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? {
        primary: amber,
      } : {
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
    <ThemeContext.Provider value={themeConfig}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}