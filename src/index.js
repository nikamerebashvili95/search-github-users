import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-r4bfsfo87xmrp4yo.us.auth0.com
// UN6YXPevx7jpuVyJKaIeCR06e83qvQdP
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-r4bfsfo87xmrp4yo.us.auth0.com"
      clientId="UN6YXPevx7jpuVyJKaIeCR06e83qvQdP"
      redirectUri={window.location.origin}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
