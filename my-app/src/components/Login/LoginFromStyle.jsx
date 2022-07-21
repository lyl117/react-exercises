import styled from "styled-components";
import font from "../../asset/font/SpoqaHanSans.css";

const LoginFormStyle = styled.div`
  margin: 0;
  padding: 0;
  font-family: font;
  box-sizing: border-box;
  position: fixed;
  width: 375px;
  height: 812px;
  background: #ffffff;

  .login {
    display: relative;
    align-items: center;
    text-align: center;
    font-family: font;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 38px;
    border-bottom: 1px solid #949494;
    width: 380px;
    margin-left: -10px;
  }
  img {
    width: 9.6px;
    height: 16.8px;
    position: absolute;
    left: 10%;
    right: 10%;
    top: 1%;
    bottom: 90%;
  }
  input {
    background: #ffffff;
    border: 1px solid #949494;
    border-radius: 999px;
    width: 343px;
    height: 30px;
  }
  input[type="email"] {
    position: absolute;
    width: 343px;
    left: -14px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
  }

  input[type="password"] {
    position: absolute;
    width: 343px;
    left: -14px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 73px;
  }
  .emailLogin {
    width: 343px;
    height: 44px;
    radius: 8px;
    background: #0080c6;
    border-radius: 8px;
    align-items: center;
    color: #ecebeb;
    font-family: font;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;
    border: 0;
    outline: 0;
    position: absolute;
    margin-top: 120px;
    left: -14px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default LoginFormStyle;
