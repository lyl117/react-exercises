import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/signup/SignUp";

function Routes() {
  return (
    <Outlet>
      <ul>
        <li>
          <Link to="/">LoginForm</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
      </ul>
    </Outlet>
  );
}
