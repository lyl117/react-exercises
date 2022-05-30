import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducer/userSlice.js";
import axios from "axios";

function LoginComponent(props) {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  let timer = null;

  useEffect(() => {
    /* ... */

    clearTimeout(timer);
    timer = setTimeout(() => {
      setMsg();
    }, 1500);
  }, [msg]);

  const LoginFunc = (e) => {
    e.preventDefault();
    /* ... */
    // 아무것도 안적었을 때
   if(id.trim() === "")
    setMsg('id를 입력해주세요.')
    return; 
  if(password.trim() === "")
    setMsg('password를 입력해주세요.')
    return;
    let body = {
     id: id.trim()
     password: password.trim()
    };

    axios.post("https://st-fe34.herokuapp.com/api/login", body).then((res) => {
      console.log(res.data);
      let code = res.data.code;
      if (code === 200) {
        setMsg("로그인 성공!");
        dispatch(
          loginUser({
            ...res.data.userInfo,
            isLogin: true,
          })
        );
      } else if (code === 400) {
        setMsg("회원가입을 해주세요.");
      } else if (code === 401) {
        setMsg("존재하지 않는 ID 입니다.");
      } else if (code === 402) {
        setMsg("비밀번호가 틀렸습니다.");
      }
    });
  };

  const id_Change = (e) => {
    setId(e.target.value);
  };
  const password_Change = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h1>LoginComponent</h1>
      <form onSubmit={LoginFunc}>
        <label htmlFor="id">ID : </label>
        <input type="text" id="id" onChange={id_Change} />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" onChange={password_Change} />
        <br />
        <button type="submit">로그인</button>
        <br />
        {msg}
      </form>
    </>
  );
}

export default LoginComponent;
