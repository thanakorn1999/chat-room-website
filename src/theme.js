import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const getDesignTokens = (mode) => ({
  typography: {
    lineHeight: `normal`,
    fontFamily: `"Prompt", sans-serif`,
    fontSize: 16, // default font size
    fontWeightRegular: 400, // default font weight
    title: {
      fontSize: 37,
      fontWeight: 800,
      color: "#383838",
    },
    "chat-username": {
      fontSize: 10,
      fontWeight: 400,
    },
    "chat-message": {
      fontSize: 14,
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#c41417",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#c41417",
      light: "skyblue",
      contrastText: "#ffffff",
    },
    // otherColor: {
    grey: {
      main: "#A2A2AB",
    },
    // },
    divider: "#E0E0E0",
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {},
    },
  },
});
export function ThemeProviderCostom({ children }) {
  const mode = "light";

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}
