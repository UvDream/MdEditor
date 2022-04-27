import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import IndexPage from "./pages/index";
import "./style/index.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <BrowserRouter>
      <IndexPage />
    </BrowserRouter>
  // </React.StrictMode>
);
