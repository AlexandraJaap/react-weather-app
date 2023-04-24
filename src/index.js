import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <App />
    </div>
    <p className="git-link">
      <a
        href="https://github.com/AlexandraJaap/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Open-source code
      </a>
      , by Alexandra Jaap
      <a
        href="https://melodious-selkie-9ed524.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🙋‍♀️
      </a>
    </p>
  </StrictMode>
);
