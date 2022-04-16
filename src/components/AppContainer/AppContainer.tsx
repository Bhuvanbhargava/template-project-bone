import { Box } from "@mui/material";
import React from "react";
import DrawerHeader from "../Common/DrawerHeader";
const AppContainer = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
      <DrawerHeader />
      {props.children}
      <DrawerHeader />
    </Box>
  );
};

export default AppContainer;
