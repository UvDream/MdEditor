import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import IndexPage from "./pages/index";
import "./style/index.less";
import {RecoilRoot} from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <RecoilRoot>
        <BrowserRouter>
            <IndexPage/>
        </BrowserRouter>
    </RecoilRoot>
    // </React.StrictMode>
);
