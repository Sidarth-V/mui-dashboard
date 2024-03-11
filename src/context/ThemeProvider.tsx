import {
  ThemeProvider as MuiThemeProvider,
  Theme,
  createTheme,
} from "@mui/material/styles";
import { ReactNode, createContext, useMemo, useState } from "react";

export type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = (props: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const theme = useMemo((): Theme => {
    return createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
      },
      components: {
        MuiToolbar: {
          defaultProps: {
            variant: "dense",
          },
        },
        MuiButton: {
          defaultProps: {
            size: "small",
          },
        },
      },
    });
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, theme }}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
