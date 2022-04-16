import React from "react";
import {
  Container,
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Stack,
  Divider,
  styled,
} from "@mui/material";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppNavigation from "./components/AppNavigation";
import styles from "./App.module.scss";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerHeader from "./components/Common/DrawerHeader";
import Home from "./screens/Home/Home";
import AppContainer from "./components/AppContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
const darkMode = true;

const App = () => {
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          //flexDirection: "column",
        }}
      >
        <AppHeader />
        <AppNavigation />
        <AppContainer>
          <Home />
        </AppContainer>
        <AppFooter />
      </Box>
    </ThemeProvider>
  );
};

export default App;
