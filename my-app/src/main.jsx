import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import Register from "./components/signup/Register";
import Reservation from "./Reservation/Reservation";

// 라우터만
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
    )
  </>
);
