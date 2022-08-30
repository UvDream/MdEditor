import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";
import IndexPage from "./pages/index";
import "./style/index.less";
import {RecoilRoot} from "recoil";
import {Provider} from "react-redux";
import store from "@/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
        <Provider store={store}>
            <RecoilRoot>
                <HashRouter>
                    <IndexPage/>
                </HashRouter>
            </RecoilRoot>
        </Provider>
    // </React.StrictMode>
);
