import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import MicrosoftLoginButton from "./components/MicrosoftLoginButton";
import GoogleCustomLoginButton from "./components/GoogleCustomLoginButton";
import NewMicrosoftLoginButton from "./components/NewMicrosoftLoginButton";
import NewLinkedinLoginButton from "./components/LinkedinLoginButton";
import useAuthCode from "./useAuthCode";

function App() {
  const [count, setCount] = useState(0);

  useAuthCode();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <MicrosoftLoginButton />
      <GoogleCustomLoginButton />
      <NewMicrosoftLoginButton />
      <NewLinkedinLoginButton />
    </>
  );
}

export default App;
