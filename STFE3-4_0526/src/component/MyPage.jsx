import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../reducer/userSlice.js";

function MyPage(props) {
  const user = useSelector((state) => state.user); //지금상태 값
  const dispatch = useDispatch(); // 액션 값.

  const LogoutFunc = () => {
    /* ... */
    dispatch(
      clearUser({
        isLogin: false,
      })
    );
  };

  return (
    <>
      <h1>MyPage</h1>
      <p>{user.name}님, 안녕하세요!</p>
      <button onClick={LogoutFunc}>로그아웃</button>
    </>
  );
}

export default MyPage;
