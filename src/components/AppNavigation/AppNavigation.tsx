import React, { useEffect, useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {CLIENT_ID_GOOGLE, DRAWER_WIDTH, Google_Provider, Microsoft_Provider} from "../../constants";
import { IStore } from "../../store";
import { setNavCollapsed } from "../../store/slices/appState";
import DrawerHeader from "../Common/DrawerHeader";
import { Stack } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useGoogleLogout } from "react-google-login";
import {useMsal} from "@azure/msal-react";

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AppNavigation = () => {
  const {setLoginProvider,provider,handleLogout} = useAuth();
  const { instance } = useMsal();
  const { signOut } = useGoogleLogout({
    clientId: CLIENT_ID_GOOGLE,
    onLogoutSuccess: handleLogout,
  });

  const navCollapsed = useSelector(
    (state: IStore) => state.appState.navCollapsed
  );
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = useState(navCollapsed);

  useEffect(() => {
    setOpen(navCollapsed);
  }, [navCollapsed]);

  const handleDrawerState = () => {
    setOpen(false);
    dispatch(setNavCollapsed(false));
  };

  const handleAppLogout = () => {
    setLoginProvider("")
    if(provider=== Google_Provider){
      console.log("logout Google")
      return signOut();

    }
    if(provider === Microsoft_Provider){
      console.log("logout MS")
      handleLogout();
      return instance.logoutPopup();
    }
  }

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerState}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Stack
        direction={"column"}
        spacing={1}
        padding={1}
        sx={{ overflowY: "auto", overflowX: "hidden" }}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          <ListItemButton
            key={"Logout"}
            onClick={handleAppLogout}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Logout />
            </ListItemIcon>
            <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </List>
      </Stack>
      <DrawerHeader />
    </Drawer>
  );
};
export default AppNavigation;
