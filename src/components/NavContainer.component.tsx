import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar.component";
import Sidebar from "./Sidebar.component";

const NavContainer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Sidebar />

      <Outlet />
    </Box>
  );
};

export default NavContainer;
