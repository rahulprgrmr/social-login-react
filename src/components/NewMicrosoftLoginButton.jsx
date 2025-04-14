import { generateCodeVerifier, generateCodeChallenge } from "../pkceUtils";

const clientId = "169cd8c7-a2de-49ab-93c1-f11dc386f40b";
const redirectUri = "http://localhost:3003";
const scope = "openid profile email offline_access https://graph.microsoft.com/Calendars.ReadWrite";

const handleMicrosoftLogin = async () => {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  localStorage.setItem("pkce_code_verifier", codeVerifier); // Save to match later

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    response_mode: "query",
    scope,
    //code_challenge: codeChallenge,
    //code_challenge_method: "S256",
  });

  window.location.href = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params.toString()}`;
};

function NewMicrosoftLoginButton() {
  return <button onClick={() => handleMicrosoftLogin()}>Sign in with Microsoft2</button>
}

export default NewMicrosoftLoginButton;
