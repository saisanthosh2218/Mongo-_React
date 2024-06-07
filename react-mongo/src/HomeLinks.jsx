import React from "react";
import { Link } from "react-router-dom";

function HomeLinks() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "wheat",
      }}
    >
      <ol
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          color: "white",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"GoogleAuth"}
        >
          {" "}
          <li
            style={{
              marginLeft: "52px",
            }}
          >
            AuthGoogle
          </li>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to={"gsap"}>
          <li style={{ marginLeft: "52px" }}>GSAP</li>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to={"AllAuth"}>
          <li style={{ marginLeft: "52px" }}>All Auths</li>
        </Link>

        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <li style={{ marginLeft: "52px" }}>Home</li>
        </Link>
        <Link
          to={"/NodeMailer"}
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          <li style={{ marginLeft: "52px" }}>NodeMailer</li>
        </Link>
      </ol>
    </div>
  );
}

export default HomeLinks;
