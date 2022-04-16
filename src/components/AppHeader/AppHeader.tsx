import React, { FC } from "react";
import appIcon from "../../assets/applogo.png";
import {
  Toolbar,
  IconButton,
  Box,
  Typography,
  Badge,
  Avatar,
  styled,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styles from "./AppHeader.module.scss";
import { useNavigate } from "react-router-dom";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { DRAWER_WIDTH } from "../../constants";
import { setNavCollapsed } from "../../store/slices/appState";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";

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
  const navCollapsed = useSelector(
    (state: IStore) => state.appState.navCollapsed
  );
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
        <Box
          sx={{
            height: "auto",
            cursor: "pointer",
          }}
          component="img"
          src={appIcon}
          onClick={() => {
            navigate("/");
          }}
        />
        <Box>
          <Typography>My App Here</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
