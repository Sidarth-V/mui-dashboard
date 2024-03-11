import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Theme, useTheme } from "@mui/material/styles";
import * as React from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeProvider";

const DarkModeToggle = () => {
  const theme: Theme = useTheme();
  const context: ThemeContextType | null = React.useContext(ThemeContext);
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        sx={{ ml: 1 }}
        onClick={context?.toggleDarkMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

export default DarkModeToggle;
