import React from "react";
import {CLIENT_ID_MS, Google_Provider, Microsoft_Provider} from "../../constants";
import {useMsal} from "@azure/msal-react";
import Button from "@mui/material/Button";
import {useAuth} from "../../context/AuthContext/AuthContext";

export const msalConfig = {
    auth: {
        clientId: CLIENT_ID_MS,
        authority: "https://login.microsoftonline.com/consumers",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
};

const MicrosoftLoginButton = () => {
    const { instance } = useMsal();
    const {handleLogin,setLoginProvider} = useAuth()

    function handleMSLogin(instance: any) {
        instance.loginPopup(loginRequest).then((logindata:any)=>{ setLoginProvider(Microsoft_Provider);handleLogin(logindata)}).catch((e:any) => {
            console.error(e);
        });
    }

    return (
        <Button onClick={() => handleMSLogin(instance)}>Sign in With Microsoft</Button>
    );
};

export default MicrosoftLoginButton;
