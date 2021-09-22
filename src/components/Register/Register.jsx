import React, { useRef } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const pwd = useRef();

  const validateEmail = (e) => {
    console.log("functionCall");
    const emailRegex = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (emailRegex.test(email.current.value)) {
      if (e != null) {
        e.target.style.outline = "solid green";
      }
      return true;
    } else {
      if (e != null) {
        e.target.style.outline = "solid red";
      }
      return false;
    }
  };

  const validatePwd = (e) => {
    console.log("functionCall");
    const curr = pwd.current.value;
    if (curr.length > 8) {
      if (e != null) {
        e.target.style.outline = "solid green";
      }
      return true;
    } else {
      if (e != null) {
        e.target.style.outline = "solid red";
      }
      return false;
    }
  };
  const validatePhone = (e) => {
    const curr = phone.current.value;
    if (curr.length === 10) {
      if (e != null) {
        e.target.style.outline = "solid green";
      }
      return true;
    } else {
      if (e != null) {
        e.target.style.outline = "solid red";
      }
      return false;
    }
  };

  const formSubmit = (e) => {
    if (
      name.current.value.length === 0 ||
      pwd.current.value.length === 0 ||
      email.current.value.length === 0
    ) {
      alert("Please Enter The Credentials");
      return;
    }
    e.preventDefault();
    if (validateEmail() && validatePhone() && validatePwd()) {
      const user = {
        userName: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
        pwd: pwd.current.value,
      };
      const res = saveUser(user);
      if (res) {
        alert("Successfully registered \n redirecting");
        //resetting the values
        name.current.value = "";
        email.current.value = "";
        phone.current.value = "";
        pwd.current.value = "";
        //redirect to home
        history.push("/");
      } else {
        alert("unsuccessful");
      }
    } else {
      !validateEmail() && alert("Wrong Email Entered");
      !validatePhone() && alert("Wrong Contact Number Entered");
      !validatePwd() && alert("Password must be atleast 8 characters long");
      return false;
    }
    //checking values
  };

  //saving a user
  function saveUser(user) {
    console.log(user);
    try {
      let users;
      // check if todos already exists or note
      if (localStorage.getItem("usersList") === null) {
        users = [];
        console.log("Executed");
      } else {
        users = JSON.parse(localStorage.getItem("usersList"));
      }
      console.log(users);
      users.push(user);
      localStorage.setItem("usersList", JSON.stringify(users));

      return true;
    } catch (err) {
      return false;
    }
  }

  return (
    <div className="register">
      <h1>Join Us!</h1>
      <h3>And Start Your New Journey </h3>
      <form className="register-form" onSubmit={formSubmit}>
        <input
          type="text"
          id="in_name"
          placeholder="Full Name"
          className="input-feild-register"
          ref={name}
        />
        <input
          type="number"
          name="phoneNo"
          id="in_phone"
          className="input-feild-register"
          ref={phone}
          placeholder="Contact Number"
          onChange={validatePhone}
        />
        <input
          type="email"
          name="email"
          id="in_email"
          className="input-feild-register"
          placeholder="Email Id"
          ref={email}
          onChange={validateEmail}
        />
        <input
          type="password"
          name="password"
          id="in_password"
          className="input-feild-register"
          placeholder="Password"
          ref={pwd}
          onChange={validatePwd}
        />
        <button type="submit" className="register-submit-btn">
          Register
        </button>
      </form>
    </div>
  );
}
