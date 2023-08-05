import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useHistory } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContextProvider";
import { ref, set } from "firebase/database";
import { database, db } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, googlesignUp } = useUserAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //this is for real time database on firebase
    try {
      await signUp(email, password, username);
      set(ref(database, "users details/"), {
        email: email,
        username: username,
      });
    } catch (err) {
      alert(err);
    }
    history.replace("/");
    setEmail("");
    setPassword("");
    setUsername("");

    //this is for store data in cloud firestroe

    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        username: username,
      });
      console.log("documents written with id:", docRef.id);
    } catch (err) {
      alert(err);
    }
    history.replace("/");
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      await googlesignUp();
      history.replace("/");
      
    } catch (err) {
     alert(err)
    }
  };
  return (
    <section>
      <div>
        <form
          onSubmit={handleSubmit}
          method="post"
          style={{
            transform: "translate(20%,20%)",
            padding: "1rem",
            margin: "auto",
            backgroundColor: " #f6bcad",
            width: "30rem",
            borderRadius: "8px",
            boxShadow: "0 10px 10px black(0,0,0.2)",
          }}
        >
          <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>Sign up</h1>
          <div>
            <label style={{ fontSize: "1.2rem" , marginBottom:".2rem" }}>User Name</label>
            <input
              type="text"
              value={username}
              placeholder="user name"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: "0.3rem",
                width: "25rem",
                borderRadius: "0.5rem",
                marginBottom:".5rem"
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: "1.2rem", marginBottom:".2rem" }}>Email</label>
           <br/> <input
              type="text"
              value={email}
              placeholder="email address"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "0.3rem",
                width: "25rem",
                borderRadius: "0.5rem",
                marginBottom:".5rem"
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: "1.2rem", marginBottom:".2rem" }}>Password</label>            <input
              type="password"
              value={password}
              placeholder="Enter password"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "0.3rem",
                width: "25rem",
                borderRadius: "0.5rem",
              }}
            />
          </div>
          <br />
          <div>
            <button
              style={{
                backgroundColor: " #d57969",
                width: "25rem",
                padding: "0.5rem",
                margin: "0.1rem",
                borderRadius: "1rem",
                fontSize: "1.3rem",
              }}
            >
              Sign up
            </button>
          </div>
          <hr />

          <div style={{ display: "flex", marginLeft: "0.9rem" }}>
            <GoogleButton
              onClick={handleGoogleSignUp}
            />
          </div><br/>
          <h5>
            Already have an account
            <Link
              style={{textDecoration:'none',marginLeft:'1rem',fontSize:'1.2rem'}}
              to="/login"
            >
              Log in
            </Link>{" "}
          </h5>
        </form>
      </div>
    </section>
  );
}
export default Signup;
