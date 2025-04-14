import { useEffect } from "react";

const useAuthCode = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    console.log("Code: ", code);

    if (code) {
      const codeVerifier = localStorage.getItem("pkce_code_verifier");
      console.log("codeVerifier: ", codeVerifier);

     // fetch("http://localhost:8000/auth/microsoft/token", {
////        method: "POST",
////        headers: { "Content-Type": "application/json" },
////        body: JSON.stringify({ code, code_verifier: codeVerifier }),
////      })
////        .then(res => res.json())
////        .then(data => {
////          console.log("Token response:", data);
////          // optionally store tokens in localStorage or context
////        })
//        .catch(err => console.error("Error exchanging code:", err));
    }
  }, []);
};

export default useAuthCode;
