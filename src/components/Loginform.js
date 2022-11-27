import React, { useState } from "react";
import "./Loginform.css";

const Loginform = () => {
  const [message, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => {
      showPopup("hide");
    }, 3000);
  };

  return (
    <div className="container">
      <h1>login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button className="btn" onClick={popup}>
        Log In
      </button>
      <a href="#" className="or">
        Or login using
      </a>
      <div className="use-accounts">
        <button className="google">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </button>
        <button className="google">
          <i class="fa fa-address-book" aria-hidden="true"></i>
        </button>
      </div>

      <div className={message}>
        <h2>Thank you for loggin in</h2>
      </div>
    </div>
  );
};

export default Loginform;
