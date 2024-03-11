import ListItem from "@mui/material/ListItem";
import CustomNavLink from "./CustomNavLink.component";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemLinkProps } from "./NavContainer.utils";
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, name, navigateTo } = props;
  const location = useLocation();
  const theme:any = useTheme();
  let color = theme.palette.mode === "dark" ? theme.palette.grey[400] : theme.palette.grey[600];
  if(location.pathname === navigateTo) {
    color = theme.palette.mode === "dark" ? theme.palette.info.dark : theme.palette.info.light;
  }
  return (
    <li>
      <ListItem
        component={CustomNavLink}
        to={navigateTo}
        disablePadding
        sx={{ display: "block" }}
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
          disableRipple
        >
          <ListItemIcon
            sx={{
              justifyContent: "center",
              color: color
            }}
          >
            {icon}
          </ListItemIcon>

          <ListItemText
            secondary={name}
            secondaryTypographyProps={{ sx: { fontSize: 10, color: color} }}
          />

        </ListItemButton>
      </ListItem>
    </li>
  );
};

export default ListItemLink;
