import { useState } from "react";
import { createElement as $ } from "react";
import {
  page,
  container,
  containerHeader,
  containerInput,
  Button,
  LoginUsing,
  UseAccounts,
  google,
  icons,
  thankyou,
} from "./LoginStyles";

const Loginform = () => {
  const [message, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => {
      showPopup("hide");
    }, 3000);
  };

  return $(
    page,
    { className: "page" },
    $(
      container,
      { className: "container" },
      $(containerHeader, { className: "Header" }, "Login"),
      $(containerInput, { type: "email", placeholder: "username" }),
      $(containerInput, { type: "password", placeholder: "password" }),
      $(
        Button,
        { className: "btn", message, onClick: () => popup() },
        "Log In"
      ),
      $(LoginUsing, { className: "or" }, "Or Login Using"),
      $(
        UseAccounts,
        { className: "use-accounts" },
        $(
          google,
          { className: "google" },
          $(icons, { className: "fa fa-envelope" })
        ),
        $(
          google,
          { className: "google" },
          $(icons, { className: "fa fa-address-book" })
        )
      ),
      $(thankyou, { className: "thankyou" }, "Thank you for logging in")
    )
  );
};

export default Loginform;
