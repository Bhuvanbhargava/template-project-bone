import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./components/Login/MicrosoftLoginButton";
import { MsalProvider } from "@azure/msal-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const msalInstance = new PublicClientApplication(msalConfig);
root.render(
  <React.StrictMode>

    <AuthProvider>
        <MsalProvider instance={msalInstance}>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
        </MsalProvider>
    </AuthProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
