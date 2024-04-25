import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import React from "react";

/**
 * This is a workaround of a workaround - due to hosting on Github pages, there's no server-side control for routing,
 * requiring the use of a HashRouter in order to properly redirect any requests to URLs which aren't the root domain.
 * That results in the site URL itself having an extra /#/, which causes problems when referencing the root path in
 * CSS attributes, so we instead explicitly check for if we're in a deployed environment and then, if so, append the
 * live site URL to the filepaths as needed
 */
window.rootURL = process.env.NODE_ENV === "development"
  ? ""
  : "https://cyip92.github.io/site/";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
