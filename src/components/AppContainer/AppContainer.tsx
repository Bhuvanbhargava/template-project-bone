import { Box } from "@mui/material";
import React from "react";
import DrawerHeader from "../Common/DrawerHeader";
import styles from "./AppContainer.module.scss";
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
    <Box
      className={styles.AppContainer}
      component="main"
      sx={{
        flexGrow: 1,
        p: 2,
        overflow: "auto",
      }}
    >
      <DrawerHeader />
      {props.children}
      <DrawerHeader />
    </Box>
  );
};

export default AppContainer;
