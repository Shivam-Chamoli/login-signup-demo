import React, { useRef } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const name = useRef();
  const pwd = useRef();
  const rem = useRef();
  const login = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    if (name.current.value.length === 0 || pwd.current.value.length === 0) {
      alert("Please Enter The Credentials");
      return;
    }
    const users = JSON.parse(localStorage.getItem("usersList"));
    let currUser = null;
    if (users === null) {
      alert("Users not present");
    } else {
      users.map((user) => {
        if (user.userName === name.current.value) {
          console.log("found user");
          if (user.pwd === pwd.current.value) {
            currUser = user;
            alert("Successfully Logged In");
          }
        }
        return true;
      });
    }
    if (currUser === null) {
      alert("Invalid Username/ Password");
    } else {
      history.push("/list");
    }
  };

  return (
    <div className="login">
      <h1>Welcome Back!</h1>
      <h3>Please Login to your account</h3>
      <form className="login-form" onSubmit={login}>
        <input
          type="text"
          id="in_phone"
          className="input-feild"
          placeholder="Full Name"
          ref={name}
        />
        <br />
        <input
          type="password"
          name="password"
          id="in_password"
          className="input-feild"
          placeholder="Password"
          ref={pwd}
        />

        <label className="options-div">
          <div>
            <input type="checkbox" id="checkbox" ref={rem} />
            <span className="checkmark">Remember Me</span>
          </div>
          <span id="fpwd">Forgot Password</span>
        </label>
        <br />

        <button type="submit" className="login-submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}
