import Loginform from "./components/Loginform";
import { createElement as $ } from "react";

function App() {
  return $("div", { className: "page" }, $(Loginform));
}

export default App;
