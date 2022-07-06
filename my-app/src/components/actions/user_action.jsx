// client/src/_actions/user_action.js

import { LOGIN_USER, REGISTER_USER } from "./types";

export function registerUser(dataToSubmit) {
  // axios를 이용해 login 요청을 보내고 response.data를 반환하여 request에 넣어준다.
  const request = axios
    .post("/api/user/login", dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}
