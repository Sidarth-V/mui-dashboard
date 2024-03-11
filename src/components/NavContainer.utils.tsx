import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import HubIcon from "@mui/icons-material/Hub";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TerminalIcon from "@mui/icons-material/Terminal";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export interface ListItemLinkProps {
    name: string;
    icon?: React.ReactElement;
    navigateTo: string;
  }

export const navItems: Array<ListItemLinkProps> = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    navigateTo: "/dashboard",
  },
  {
    name: "Alerting",
    icon: <NotificationsIcon />,
    navigateTo: "/alerting",
  },
  {
    name: "Tracing",
    icon: <FormatAlignLeftIcon />,
    navigateTo: "/tracing",
  },
  {
    name: "SQL",
    icon: <TerminalIcon />,
    navigateTo: "/sql",
  },
  {
    name: "Baseline",
    icon: <HubIcon />,
    navigateTo: "/baseline",
  },
  {
    name: "Snapshots",
    icon: <WatchLaterIcon />,
    navigateTo: "/snapshots",
  },
];
