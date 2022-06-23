import React, { useEffect } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppNavigation from "./components/AppNavigation";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./screens/Home/Home";
import AppContainer from "./components/AppContainer";
import { useSelector } from "react-redux";
import { IStore } from "./store";
import { useAuth } from "./context/AuthContext/AuthContext";
import GoogleLoginButton from "./components/Login/GoogleLoginButton";
import MicrosoftLoginButton from "./components/Login/MicrosoftLoginButton";
import FacebookLoginButton from "./components/Login/FacebookLoginButton";
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
  const auth = useAuth();
  const darkMode = useSelector((state: IStore) => state.appState.darkTheme);
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: CLIENT_ID_GOOGLE,
  //       scope: "",
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // }, []);

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

        {auth.loginData ? (
          <AppContainer>
            <Home />
          </AppContainer>
        ) : (
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "40%",
            }}
          >
            <>
              <GoogleLoginButton />
              <MicrosoftLoginButton />
                <FacebookLoginButton/>
            </>
          </div>
        )}
        <AppFooter />
      </Box>
    </ThemeProvider>
  );
};

export default App;
