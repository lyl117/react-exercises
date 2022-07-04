import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import signUp from "./components/signUp";

function Routes() {
  return (
    <Outlet>
      <ul>
        <li>
          <Link to="/">LoginForm</Link>
        </li>
        <li>
          <Link to="/signUp">signUp</Link>
        </li>
      </ul>
    </Outlet>
  );
}
