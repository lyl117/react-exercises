import React from "react";
import { useSelector } from "react-redux";
import { userSlice } from "./reducer/userSlice";
import LoginComponent from "./component/LoginComponent";
import MyPage from "./component/MyPage";

function App() {
  const user = useSelector((state) => state.user);

  return <div>{user.isLogin ? <MyPage /> : <LoginComponent />}</div>;
}

export default App;
