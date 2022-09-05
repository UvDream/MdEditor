import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import CalendarPage from "./pages/calendar";
import SettingPage from "./pages/setting";
import DashboardPage from "./pages/dashboard";
import AccountPage from "./pages/account";
import "./styles/index.less";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/calendar" element={<CalendarPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/setting" element={<SettingPage />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
        </Route>
        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
