import React from 'react';
import { Container, Box, Typography, ThemeProvider, createTheme, Stack, Divider } from '@mui/material';
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppNavigation from './components/AppNavigation'
import styles from "./App.module.scss"
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
const darkMode = true;
const App = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppHeader />
        <AppNavigation />
        <Container component="main">
          <Typography variant="h5" component="h2">
           Main Content Area
          </Typography>        
          
        </Container>
        <AppFooter />
      </ThemeProvider>
    </Box>
  );
}

export default App;
