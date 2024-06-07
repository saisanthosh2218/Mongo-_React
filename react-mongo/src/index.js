import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGoogle from "./AuthGoogle";
import NodeMailer from "./NodeMailer";
import HomeLinks from "./HomeLinks";
import Form from "./Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <GoogleOAuthProvider clientId="621708612417-ql6ujopauh82130g13a4nnfjq0mesmp1.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeLinks} />
          <Route path="/GoogleAuth" Component={AuthGoogle} />
          <Route path="/gsap" Component={App} />
          <Route path="/NodeMailer" Component={NodeMailer} />
          <Route path="/AllAuth" Component={Form} />
        </Routes>
      </BrowserRouter>{" "}
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
