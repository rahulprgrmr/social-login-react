import { useGoogleLogin } from '@react-oauth/google';


function GoogleCustomLoginButton() {
  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
    scope: "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/meetings.space.created https://www.googleapis.com/auth/calendar"
  });

  return <button onClick={() => login()}>Sign In with Google2</button>
}

export default GoogleCustomLoginButton
