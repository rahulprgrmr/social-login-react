// MicrosoftLoginButton.js
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../config/msalConfig";
// import axios from "axios";

const msalInstance = new PublicClientApplication(msalConfig);

console.log(msalConfig);

export const loginRequest = {
  scopes: ["user.read", 'openid', 'profile'], // Add other scopes if needed
};

await msalInstance.initialize();

function MicrosoftLoginButton() {
  const login = async () => {
    try {
      const response = await msalInstance.loginPopup(loginRequest);

      console.log(response);

      const account = response.account;

       // Get access token for Microsoft Graph with user.readbasic.all
      const tokenResponse = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account,
      });

      console.log("Access Token:", tokenResponse.accessToken);
      console.log("Scopes:", tokenResponse.scopes);


      //   const accessToken = response.accessToken;

      //   // Send access token to your Django backend
      //   const res = await axios.post("/api/auth/login/microsoft", {
      //     token: accessToken,
      //   });

      //   localStorage.setItem("access_token", res.data.token);
    } catch (err) {
      console.error("Microsoft Login Failed", err);
    }
  };

  return <button onClick={login}>Sign in with Microsoft</button>;
}

export default MicrosoftLoginButton;
