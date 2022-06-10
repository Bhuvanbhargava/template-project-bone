import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppNavigation from "./components/AppNavigation";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./screens/Home/Home";
import AppContainer from "./components/AppContainer";
import { useSelector } from "react-redux";
import { IStore } from "./store";

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

const App = () => {
  const darkMode = useSelector((state: IStore) => state.appState.darkTheme);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
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
