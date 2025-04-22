import { useGoogleLogin } from "@react-oauth/google";
import React from "react";

function Auth() {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      alert("Login Success: " + codeResponse.code);
      console.log(codeResponse);
      console.log("code :" + codeResponse.code);
    },

    onError: (error) => {
      console.log("Login Failed:", error);
      if (error.type === "popup_closed") {
        alert("You closed the login window 😢 — Please try again.");
      }
    },
    onNonOAuthError: (error) => {
      console.log("Login Failed:", error);
      if (error.type === "popup_closed") {
        alert("You closed the login window 😢 — Please try again.");
      }
    },
    flow: "auth-code",
    scope:
      "https://mail.google.com https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email ",
  });
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={login}
        className="flex items-center px-4 py-2 bg-blue-300 text-blue-800 font-semibold rounded-lg shadow-md hover:bg-transparent duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-75"
      >
        <span className="mr-2">
          <i className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                d="M21.35 11.1h-9.9v2.8h5.7c-.3 1.6-1.2 2.9-2.5 3.7v3h4c2.3-2.1 3.7-5.2 3.7-8.7 0-.6-.1-1.2-.2-1.8z"
                fill="#4285F4"
              />
              <path
                d="M11.45 21c2.7 0 5-1 6.7-2.7l-4-3c-1.1.7-2.5 1.1-3.7 1.1-2.8 0-5.2-1.9-6-4.5h-4v2.8c1.7 3.4 5.2 5.8 9 5.8z"
                fill="#34A853"
              />
              <path
                d="M5.45 12.5c-.2-.7-.2-1.4-.2-2.1s.1-1.4.2-2.1v-2.8h-4c-.8 1.6-1.3 3.4-1.3 5.3s.5 3.7 1.3 5.3l4-3z"
                fill="#FBBC05"
              />
              <path
                d="M11.45 4.5c1.5 0 2.8.5 3.8 1.5l2.8-2.8c-1.7-1.6-4-2.7-6.6-2.7-3.8 0-7.3 2.4-9 5.8l4 3c.8-2.6 3.2-4.5 6-4.5z"
                fill="#EA4335"
              />
            </svg>
          </i>
        </span>
        Login with Google
      </button>
    </div>
  );
}

export default Auth;
