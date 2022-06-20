import React, { createContext, useContext, useState } from "react";

export interface IAuthData {
  IsAuthorized: boolean;
  loginData: any;
  handleFailure: (result: any) => void;
  handleLogin: (googleData: any) => void;
  handleLogout: () => void;
}
const initValue: IAuthData = {
  IsAuthorized: false,
  loginData: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleFailure: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogin: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogout: () => {},
};
export const AuthContext = createContext(initValue);

export const AuthProvider = (props: any) => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(`${localStorage.getItem("loginData")}`)
      : null
  );
  const handleFailure = (result: any) => {
    console.log("login Failure", result);
  };

  const handleLogin = async (googleData: any) => {
    console.log("login Success", googleData);
    setLoginData(googleData.profileObj);
    localStorage.setItem("loginData", JSON.stringify(googleData.profileObj));
  };

  const handleLogout = () => {
    console.log("LogOut Successfully");
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  return (
    <AuthContext.Provider
      value={{ loginData, handleFailure, handleLogin, handleLogout }}
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
