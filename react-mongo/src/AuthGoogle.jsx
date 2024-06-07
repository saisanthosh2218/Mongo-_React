import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function AuthGoogle() {
  return (
    <div style={{ width: "50%" }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default AuthGoogle;
