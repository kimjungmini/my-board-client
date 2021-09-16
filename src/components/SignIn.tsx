import React, { useState } from "react";
import { useHistory } from "react-router";
import TokenService from "../service/TokenService";
import UserService from "../service/UserService";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    const { username, password } = formData;

    const response = await UserService.signin(username, password);
    // 로그인 성공
    const data = response?.data;
    if (data.accessToken) {
      console.log("로그인 성공!");
      TokenService.setToken(data.accessToken);
      history.push("/");
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="username" onChange={onChangeHandler} /> <br />
      <input type="text" name="password" onChange={onChangeHandler} /> <br />
      <button onClick={onSubmit}>로그인</button>
    </form>
  );
};

export default SignIn;
