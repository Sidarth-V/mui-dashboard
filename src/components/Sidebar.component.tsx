import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { navItems } from "./NavContainer.utils";
import ListItemLink from "./ListItemLink.component";

const drawerWidth: number = 80;

const Sidebar = () => {
  return (
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
        {navItems.map((item) => {
          return (
            <ListItemLink
              navigateTo={item.navigateTo}
              name={item.name}
              icon={item.icon}
              key={item.name}
            />
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
