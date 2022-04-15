/* Ignore in test coverage report due to simplicity*/
/* istanbul ignore file */
import { configureStore } from '@reduxjs/toolkit';
import appState, {IAppState} from "./slices/appState";


export interface IStore{
  appState: IAppState;
}

export default configureStore({
  reducer: { 
    appState 
  },
});
