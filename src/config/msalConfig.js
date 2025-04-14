// export const msalConfig = {
//   auth: {
//     clientId: "fcd7bd87-64a4-471d-aca1-492f301ea155",
//     authority: "https://login.microsoftonline.com/common",
//     redirectUri: window.location.origin,
//   },
// };

import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    OIDCOptions: {
      defaultScopes: ["openid", "profile", "email", "offline_access", "https://graph.microsoft.com/Calendars.ReadWrite"],
      serverResponseType: "query",
    },
    clientId: "fcd7bd87-64a4-471d-aca1-492f301ea155",
    //clientId: "3f3c0101-f61b-46af-af13-8d17bf2bc6bb",
    // authority: auth_data?.urlAuthorize,
    authority: "https://login.microsoftonline.com/common/",
    //redirectUri: `https://develop.api.nocn.tescalade.com/api/c/v1/email/callback/`,
    // redirectUri: "http://localhost:3000/common/verify/",
    redirectUri: window.location.origin,
    // client_secret: auth_data?.clientSecret,
    navigateToLoginRequestUrl: false,
    prompt: "consent",
    protocolMode: "OIDC",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};
