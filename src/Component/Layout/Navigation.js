import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <header
      style={{
        width: "125%",
        backgroundColor: " #ef664e",
        height: "5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 3rem",
      }}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "white" }}>
        {" "}
        Authentication{" "}
      </div>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            padding: "0",
            margin: "auto",
            alignItems: "baseline",
          }}
        >
          <li style={{ marginLeft: "6rem", fontSize: "1.8rem" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
              {console.log("hime button ckuci")}
            </Link>
          </li>
          <li style={{ marginLeft: "6rem", fontSize: "1.8rem" }}>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
