import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { CLIENT_ID_GOOGLE } from "../../constants";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const AppLoginButton = () => {
  const auth = useAuth();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID_GOOGLE,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  return (
    <GoogleLogin
      clientId={CLIENT_ID_GOOGLE}
      buttonText="Log in with Google"
      onSuccess={auth.handleLogin}
      onFailure={auth.handleFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};
export default AppLoginButton;
