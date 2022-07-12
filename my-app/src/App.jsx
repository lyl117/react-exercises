import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Register from "./components/signup/SignUp";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import LoginUser from "axios";
// import withRedux from "next-redux-wrapper";

function App() {
  // const RegisterUser = {
  //   id: "qkqh@gmail.com",
  //   password: "bnbn1234",
  //   name: "아무개",
  //   gender: "남성",
  //   number: "20220707",
  //   birth: "20220707",
  // };

  // console.log(RegisterUser);
  // axios.post("/api/user/register", RegisterUser).then((res) => {
  //   console.log(res);
  //   // console.log(res.data?.message);
  // });
  // axios({
  //   method: "POST",
  //   url: "/api/user/register",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: {
  //     id: "qkqh@gmail.com",
  //     password: "bnbn1234",
  //     name: "아무개",
  //     gender: "남성",
  //     number: "20220707",
  //     birth: "20220707",
  //   },
  // });

  const [user, setUser] = useState({ id: "", password: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    // const axios_post = () => {
    //   const LoginUser = {
    //     id: "qkqh@gmail.com",
    //     password: "bnbn1234",
    //   };
    //   axios
    //     .post("https://stfe-gotogether.herokuapp.com/user/login")
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
    const LoginUser = {
      id: "qkqh@gmail.com",
      password: "bnbn1234",
    };

    // console.log(LoginUser);
    axios
      .post("https://stfe-gotogether.herokuapp.com/user/login", LoginUser)
      .then((res) => {
        console.log(res);
      });

    if (details.id == LoginUser.id && details.password == LoginUser.password) {
      console.log("로그인되었습니다.");
      setUser({
        id: details.id,
        password: details.password,
      });
    } else {
      console.log("세부정보가 일치하지 않습니다.");
      setError("세부정보가 일치하지 않습니다.");
    }
  };

  const Logout = () => {
    setUser({ id: "", password: "" });
  };

  return (
    <div className="App">
      {user.id != "" ? (
        <div className="welcome">
          <h2>
            Weclome,<span>{user.id}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            exact={true}
            element={<LoginForm Login={Login} error={error} />}
          />
          <Route path="/Register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
// wrapper.withRedux(NodeBird);
