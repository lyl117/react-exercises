import React, { useState } from "react";
import { useInternalRouter } from "../routing";
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const { push } = useInternalRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  const signUp = (e) => {
    e.preventDefault(); // 새로고침을 막는다.
    push("/signUp");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>로그인</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="from-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="이메일"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
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
        <input type="submit" value="아이디 비밀번호 찾기"></input>
        <input onClick={signUp} type="submit" value="회원가입"></input>
        {/* <button onClick={signUp}>회원가입</button> */}
      </div>
    </form>
  );
}

export default LoginForm;
