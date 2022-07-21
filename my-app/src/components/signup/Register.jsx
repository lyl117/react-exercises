import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import RegisterStyle from "./RegisterCss";
import close from "../../asset/img/close.png";

const Register = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <RegisterStyle>
      <div>
        <div className="Register">회원가입</div>
        <img src={close} alt="close" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            <input
              name="email"
              type="email"
              placeholder="&nbsp;&nbsp;이메일"
              {...register("email", { required: true })}
            />
            {errors.id && <p>이메일을 입력해주세요.</p>}
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
          <label htmlFor="password_confirm">
            <input
              name="passwordConfirm"
              type="password"
              placeholder="&nbsp;&nbsp;비밀번호 확인"
              {...register("passwordConfirm", {
                required: true,
                validate: (value) => value === password.current,
              })}
            />
            {errors.passwordConfirm &&
              errors.passwordConfirm.type === "validate" && (
                <p>비밀번호가 다릅니다. 비밀번호를 다시 입력해주세요.</p>
              )}
          </label>
          <label htmlFor="name">
            <div className="div_name">이름</div>
            <input name="name" type="text" placeholder="&nbsp;&nbsp;이름" />
            {errors.name && <p>{errors.name.message}</p>}
          </label>
          <label htmlFor="number">
            <div className="tel">연락처</div>
            <input name="number1" type="tel" />-
            <input name="number2" type="tel" />-
            <input name="number3" type="tel" />
            {errors.number && <p>{errors.number.message}</p>}
          </label>
          <label htmlFor="birth">
            <div className="birth">생년월일</div>
            <div className="info" id="info__birth">
              <input
                class="box"
                name="year"
                id="year"
                type="text"
                placeholder="&nbsp;&nbsp;년도"
              />
              <select className="box" id="birth-month">
                <option>&nbsp;&nbsp;월</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select className="box" id="birth-day">
                <option> &nbsp;&nbsp;일</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            {errors.number && <p>{errors.number.message}</p>}
          </label>
          <div className="gender">성별</div>
          <input type="checkbox" name="gender" id="woman" />
          여성
          <input type="checkbox" name="gender" id="man" />
          남성
          <div className="trip">
            여행취향
            <br />
            (중복선택가능)
          </div>
          <input type="checkbox" name="trip" id="golf" />
          골프
          <input type="checkbox" name="trip" id="fishing" />
          낚시
          <input type="checkbox" name="trip" id="hiking" />
          등산
          <input type="checkbox" name="trip" id="shopping" />
          쇼핑
          <input type="checkbox" name="trip" id="healing" />
          힐링
          <input type="checkbox" name="trip" id="history" />
          역사
          <div className="group">
            선호 그룹
            <br />
            (중복선택가능)
          </div>
          <input type="checkbox" name="group" id="5060" />
          5060
          <input type="checkbox" name="group" id="2030" />
          2030
          <input type="checkbox" name="group" id="female" />
          여성
          <input type="checkbox" name="group" id="male" />
          남성
          <input type="checkbox" name="group" id="together" />
          함께
          <input type="checkbox" name="group" id="outgoing" />
          외향적인
          <input type="checkbox" name="group" id="reserved" />
          내향적인
          <input className="submit_button" type="submit" value="가입하기" />
        </form>
      </div>
    </RegisterStyle>
  );
};

export default Register;
