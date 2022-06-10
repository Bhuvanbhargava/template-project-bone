import React, { FC } from "react";
import appIcon from "../../assets/applogo.png";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import {
  Toolbar,
  IconButton,
  Box,
  Typography,
  Badge,
  Avatar,
  AppBar,
  useTheme,
  Icon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";

import { setNavCollapsed, toggleTheme } from "../../store/slices/appState";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: DRAWER_WIDTH,
//     width: `calc(100% - ${DRAWER_WIDTH}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

const AppHeader: FC = () => {
  const theme = useTheme();
  const navCollapsed = useSelector(
    (state: IStore) => state.appState.navCollapsed
  );
  const darkTheme = useSelector((state: IStore) => state.appState.darkTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      color="primary"
      //   open={navCollapsed}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={() => dispatch(setNavCollapsed(!navCollapsed))}
          sx={{
            marginRight: 2,
            // ...(navCollapsed && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Icon
          component={MenuBookTwoToneIcon}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
        <Box sx={{ p: 1 }}>
          <Typography>Template</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => dispatch(toggleTheme(!darkTheme))}
            color="inherit"
            title="Toggle Theme"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
          >
            <Avatar />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
