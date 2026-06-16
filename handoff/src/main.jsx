import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard.jsx";
import { PROJECTS, TAGS, SAVES, SIGNATURE } from "./data.js";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dashboard projects={PROJECTS} tags={TAGS} saves={SAVES} signature={SIGNATURE} />
  </React.StrictMode>
);
