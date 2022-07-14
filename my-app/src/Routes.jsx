import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import Register from "./components/signup/Register";
import Reservation from "./Reservation/Reservation";

function Routes() {
  return (
    <Outlet>
      <ul>
        <li>
          <Link to="/">LoginForm</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Reservation">Reservation</Link>
        </li>
      </ul>
    </Outlet>
  );
}
