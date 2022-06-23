import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import {CLIENT_ID_GOOGLE, Google_Provider} from "../../constants";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const GoogleLoginButton = () => {
  const {handleLogin,handleFailure,setLoginProvider} = useAuth();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID_GOOGLE,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess =(data:any)=> {
    setLoginProvider(Google_Provider);
    return handleLogin(data);
  }

  return (
    <GoogleLogin
      clientId={CLIENT_ID_GOOGLE}
      buttonText="Log in with Google"
      onSuccess={(data)=>onSuccess(data)}
      onFailure={handleFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};
export default GoogleLoginButton;
