import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInternalRouter } from "../routing";

// import Register from "./signup/SignUp";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ id: "", password: "" });

  const { push } = useInternalRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  const signUp = (e) => {
    e.preventDefault(); // 새로고침을 막는다.
    push("/Register");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>로그인</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="from-group">
          <label htmlFor="id"></label>
          <input
            type="id"
            name="id"
            id="id"
            placeholder="이메일"
            onChange={(e) => setDetails({ ...details, id: e.target.value })}
            value={details.id}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="이메일로 로그인"></input>
        <Link target="_blank" to="/Register" value="회원가입">
          회원가입
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
