import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import TerminalIcon from "@mui/icons-material/Terminal";
import HubIcon from "@mui/icons-material/Hub";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { NavLink } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../App";

const drawerWidth = 80;
const iconSize = 25;

const ClippedDrawer = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);


  const menuItems = [
    {
      name: "Dashboard",
      icon: <DashboardIcon sx={{ fontSize: iconSize }} color="inherit" />,
      navigateTo: "/dashboard",
    },
    {
      name: "Alerting",
      icon: <NotificationsIcon sx={{ fontSize: iconSize, color: "inherit" }} />,
      navigateTo: "/alerting",
    },
    {
      name: "Tracing",
      icon: (
        <FormatAlignLeftIcon sx={{ fontSize: iconSize, color: "inherit" }} />
      ),
      navigateTo: "/tracing",
    },
    {
      name: "SQL",
      icon: <TerminalIcon sx={{ fontSize: iconSize, color: "inherit" }} />,
      navigateTo: "/sql",
    },
    {
      name: "Baseline",
      icon: <HubIcon sx={{ fontSize: iconSize, color: "inherit" }} />,
      navigateTo: "/baseline",
    },
    {
      name: "Snapshots",
      icon: <WatchLaterIcon sx={{ fontSize: iconSize, color: "inherit" }} />,
      navigateTo: "/snapshots",
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            FireWatch
          </Typography>

          <Box sx={{ display: "flex" }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.name}
              disablePadding
              sx={{ display: "block", color: "#D8D8D8" }}
              to={item.navigateTo}
              component={NavLink}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  alignItems: "center",
                  px: 2.5,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  secondary={item.name}
                  secondaryTypographyProps={{ sx: { fontSize: 10 } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Outlet />
    </Box>
  );
};

export default ClippedDrawer;
