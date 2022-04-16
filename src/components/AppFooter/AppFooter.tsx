import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, AppBar, Toolbar } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import styles from "./AppFooter.module.scss";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        BOne
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const AppFooter = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "background.paper",
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="body2" color="text.secondary">
            Company: BOne
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Copyright />
        </Toolbar>
      </Box>
    </>
  );
};

export default AppFooter;
