
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./rihan.css"
import Rock from "./Rock";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
   {/* <App/> */}
  <Rock/>
  </BrowserRouter>
)