import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  const adminuser = {
    email: "lyl117@gmail.com",
    password: "1234",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminuser.email &&
      details.password == adminuser.password
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
