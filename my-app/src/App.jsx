import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/signup/SignUp";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import LoginUser from "axios";

function App() {
  const LoginUser = {
    email: "lyl117@gmail.com",
    password: "1234",
  };

  console.log(LoginUser);
  axios.post("/api/user/login", LoginUser).then((res) => {
    console.log(res);
    // console.log(res.data?.message);
  });

  const RegisterUser = {
    email: "lyl117@gmail.com",
    password: "1234",
    name: "이유림",
    gender: "여자",
    birth: "20220707",
  };

  console.log(RegisterUser);
  axios.post("/api/user/register", RegisterUser).then((res) => {
    console.log(res);
    // console.log(res.data?.message);
  });

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == LoginUser.email &&
      details.password == LoginUser.password
    ) {
      console.log("로그인되었습니다.");
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("세부정보가 일치하지 않습니다.");
      setError("세부정보가 일치하지 않습니다.");
    }
  };

  const Logout = () => {
    setUser({ email: "", password: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Weclome,<span>{user.email}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LoginForm Login={Login} error={error} />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      )}
    </div>
  );
}
export default App;
