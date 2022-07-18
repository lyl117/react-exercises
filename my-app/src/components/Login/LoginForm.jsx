import React, { useRef } from "react";
import LoginFormStyle from "./LoginFromStyle";
import { useForm } from "react-hook-form";
import vector from "../../asset/img/Vector10.png";
import axios from "axios";

const LoginForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (e) => {
    // console.log(data);
    //api 요청
    const fetchData = async () => {
      console.log(inputs);
      const res = await axios.post("/api/user/login", inputs);
      console.log(res);
    };
    function submit(e) {
      e.preventDefault();
      fetchData();
    }
  };

  return (
    <LoginFormStyle>
      <form onSubmit={handleSubmit(onSubmit)}></form>
      <div>
        <label htmlFor="email">
          <div className="login">이메일로 로그인</div>
          <img src={vector} alt="vector" />
          <input name="email" type="email" placeholder="&nbsp;&nbsp;이메일" />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="password"
            placeholder="&nbsp;&nbsp;비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "비밀번호를 8자리 이상 입력해주세요.",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                message: "영문, 숫자 모두 사용해주세요.",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <form>
          <button className="emailLogin" type="button" onClick={onSubmit}>
            이메일로 로그인
          </button>
        </form>
      </div>
    </LoginFormStyle>
  );
};

export default LoginForm;
