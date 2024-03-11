import { styled } from "@mui/material/styles";

const HeaderSpacer = styled("div")(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    minHeight: 48,
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
  };
});

export default HeaderSpacer;
