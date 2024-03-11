import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import AppName from "./AppName.component";
import DarkModeToggle from "./DarkModeToggle.component";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <AppName />
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
