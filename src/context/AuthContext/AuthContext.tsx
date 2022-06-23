import React, { createContext, useContext, useState } from "react";
import {Google_Provider, Microsoft_Provider} from "../../constants";

export interface IAuthData {
  IsAuthorized: boolean;
  provider: string;
  loginData: any;
  handleFailure: (result: any) => void;
  handleLogin: (googleData: any) => void;
  handleLogout: () => void;
  setLoginProvider: (provider:string) => void;
}
const initValue: IAuthData = {
  IsAuthorized: false,
  loginData: null,
  provider:"",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleFailure: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogin: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogout: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoginProvider: () => {},
};
export const AuthContext = createContext(initValue);

export const AuthProvider = (props: any) => {
  const [provider, setProvider] = useState(localStorage.getItem("loginProvider")
      ? localStorage.getItem("loginProvider")
      : null);

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(`${localStorage.getItem("loginData")}`)
      : null
  );

 const setLoginProvider=(provider:string)=>{
   setProvider(provider);
   localStorage.setItem("loginProvider", provider);
 }
  const handleFailure = (result: any) => {
    localStorage.removeItem("loginProvider");
    console.log("login Failure", result);
  };

  const handleLogin = async (loginResponse: any) => {
    console.log("login Success", loginResponse);
    setLoginData(loginResponse);
    localStorage.setItem("loginData", JSON.stringify(loginResponse));
    // if(provider === Microsoft_Provider)
    // {
    //   setLoginData(loginResponse.account);
    //   localStorage.setItem("loginData", JSON.stringify(loginResponse.account));
    // }
    // if(provider ===  Google_Provider)
    // {
    //   setLoginData(loginResponse.profileObj);
    //   localStorage.setItem("loginData", JSON.stringify(loginResponse.profileObj));
    // }

  };

  const handleLogout = () => {
    console.log("LogOut Successfully");
    localStorage.removeItem("loginProvider");
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  return (
    <AuthContext.Provider
      value={{ loginData, handleFailure, handleLogin, handleLogout,setLoginProvider,provider }}
      {...props}
    />
  );
};
export const useAuth = (): IAuthData => {
  const context = useContext<IAuthData>(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a auth Context");
  }
  return context;
};
export default AuthContext;
