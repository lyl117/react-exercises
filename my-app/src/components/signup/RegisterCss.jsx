import styled from "styled-components";
import font from "../../asset/font/SpoqaHanSans.css";

const RegisterStyle = styled.div`
  margin: 0;
  padding: 0;
  font-family: font;
  box-sizing: border-box;
  position: fixed;
  width: 375px;
  height: 768px;
  overflow: scroll;
  background: #ffffff;
  .Register {
    /* display: relative; */
    align-items: center;
    text-align: center;
    font-family: font;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 38px;
    border-bottom: 1px solid #949494;
    width: 100%;
    /* margin-left: -12px; */
  }
  p {
    color: #0080c6;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
  img {
    width: 14px;
    height: 14px;
    position: absolute;
    left: 10%;
    right: 10%;
    top: 1%;
    bottom: 90%;
  }
  input {
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #949494;
    border-radius: 999px;
    width: 343px;
    height: 30px;
    align-items: center;
  }
  input[type="email"] {
    margin: 32px 16px 10px 16px;
  }
  input[type="password"] {
    margin: 5px 16px;
  }
  .div_name {
    position: relative;
    left: 25px;
    top: 3px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6a6a6a;
  }
  input[type="text"] {
    margin: 5px 16px;
  }
  .tel {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6a6a6a;
    float: left;
    padding: 9px 20px 50px 27px;
  }
  input[type="tel"] {
    width: 79px;
    height: 30px;
  }
  input[name="number1"] {
    margin-left: 3px;
    margin-top: 5px;
  }
  .birth {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6a6a6a;
    float: left;
    margin: 50px 21px 18px -60px;
  }
  #year {
    float: left;
    margin: 8px 3px;
  }
  #birth-month {
    float: left;
    margin-left: 87px;
    margin-top: 8px;
  }
  .box {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    box-sizing: border-box;
    position: absolute;
    background: #ffffff;
    border: 1px solid #949494;
    border-radius: 100px;
    width: 80px;
    height: 30px;
  }
  #birth-day {
    margin: 8px 24px 8px;
    left: 248px;
  }
  .gender {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6a6a6a;
    float: left;
    /* margin: 56px -65px -70px; */
  }
  input[type="checkbox"] {
    width: 15px; /*Desired width*/
    height: 15px;
    margin: 5px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6a6a6a;
  }
  #woman {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6a6a6a;
    float: center;
  }
  #man {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6a6a6a;
    float: center;
  }
  .trip {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6a6a6a;
    float: left;
    /* margin: -5px 5px 21px 20px; */
  }
  .group {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #6a6a6a;
    float: left;
    /* margin: -100px 36px 5px 20px; */
  }
  .submit_button {
    position: relative;
  }
`;

export default RegisterStyle;
