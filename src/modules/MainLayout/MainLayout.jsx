import React from "react";
import { Outlet } from "react-router-dom";
import "./styles.css";

export const MainLayout = () => (
  <div className="mainLayout_container">
    <Outlet />
  </div>
);
