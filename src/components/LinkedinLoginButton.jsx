
import { generateCodeVerifier, generateCodeChallenge } from "../pkceUtils";

const clientId = "86l2ibw5tb484j";
const redirectUri = "http://localhost:3003";
// const scope = "openid profile email offline_access https://graph.microsoft.com/Calendars.ReadWrite";
const scope = "openid profile email ";

const handleLinkedinLogin = async () => {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  localStorage.setItem("pkce_code_verifier", codeVerifier); // Save to match later

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope,
    //code_challenge: codeChallenge,
    //code_challenge_method: "S256",
  });

  window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`;
};

function NewLinkedinLoginButton() {
  return <button onClick={() => handleLinkedinLogin()}>Sign in with LinkedIn</button>
}

export default NewLinkedinLoginButton;
