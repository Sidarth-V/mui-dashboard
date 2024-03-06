import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import BasicLayout from "../../components/BasicLayout/BasicLayout";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CustomTabPanel = ({ value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3, height: "100%"}}>
          <BasicLayout />
        </Box>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [tabList, setTabList] = React.useState([
    "Item One",
    "Item Two",
    "Item Three",
  ]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addTabList = () => {
    setTabList([...tabList, "Item Four"]);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <DrawerHeader />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {tabList.map((item, index) => (
            <Tab label={item} key={`${item}_${index}`} />
          ))}
          <Divider orientation="vertical" flexItem />
          <Button variant="text" onClick={() => addTabList()}>
            +
          </Button>
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
};

export default Dashboard;
