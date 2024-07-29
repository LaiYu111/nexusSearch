import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LogIn";

function App() {
  const location = useLocation();

  const setUserTheme = () => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.querySelector("html").classList.add("dark");
      document.querySelector("html").style.colorScheme = "dark";
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").style.colorScheme = "light";
    }
  };

  const setUserSideBarExtended = () => {
    if (localStorage.getItem("sidebar-expanded") == "true") {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  };

  useEffect(() => {
    setUserTheme();
    setUserSideBarExtended();
  }, []);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
