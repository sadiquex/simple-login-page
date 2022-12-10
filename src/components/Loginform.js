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
  clickMe,
  thankyou,
} from "./LoginStyles";

function Loginform() {
  const [clicked, setClicked] = useState(false);

  function popup() {
    setClicked(!clicked);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  }

  return $(
    page,
    { className: "page" },
    $(
      container,
      { className: "container" },
      $(containerHeader, { className: "Header" }, "Login"),
      $(containerInput, { type: "email", placeholder: "username" }),
      $(containerInput, { type: "password", placeholder: "password" }),
      $(Button, { className: "btn", onClick: () => popup() }, "Log In"),
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
      $(
        thankyou,
        { className: "thankyou", clicked, onClick: () => popup() },
        "Thank you for logging in"
      )
    )
  );
}

export default Loginform;
