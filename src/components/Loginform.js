import React from "react";
import "./Loginform.css";

const Loginform = () => {
  return (
    <div className="container">
      <h1>login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button className="btn">Log In</button>
      <h2 className="or">Or login using</h2>
      <div className="use-accounts">
        <button className="google">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </button>
        <button className="google">
          <i class="fa fa-address-book" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Loginform;
