import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStore } from "../index";

export interface IAppState {
  navCollapsed: boolean;
  currentPath: string;
  masked: boolean;
  darkTheme: boolean;
}

export const initialState: IAppState = {
  navCollapsed: false,
  currentPath: "/",
  masked: false,
  darkTheme: false,
};

export const appState = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setCurrentPath: (state: IAppState, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
    },
    setNavCollapsed: (state: IAppState, action: PayloadAction<boolean>) => {
      state.navCollapsed = action.payload;
    },
    setMasked: (state: IAppState, action: PayloadAction<boolean>) => {
      state.masked = action.payload;
    },
    toggleTheme: (state: IAppState, action: PayloadAction<boolean>) => {
      state.darkTheme = action.payload;
    },
  },
});

export const { setCurrentPath, setMasked, setNavCollapsed, toggleTheme } =
  appState.actions;

/* Ignore selectors in test coverage report due to simplicity */
/* istanbul ignore next */
export const selectCurrentPath = (state: IStore) => state.appState.currentPath;

/* istanbul ignore next */
export const selectMasked = (state: IStore) => state.appState.masked;

export default appState.reducer;
