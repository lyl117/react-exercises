import LoginFormStyle from "./LoginFromStyle";
import vector from "../../asset/img/Vector10.png";
import axios from "axios";

const LoginForm = () => {
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
          />
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
