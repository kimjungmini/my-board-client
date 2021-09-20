import React, { useState } from "react";
import { useHistory } from "react-router";
import { useUserForm } from "../hooks/useUserForm";
import TokenService from "../service/TokenService";
import UserService from "../service/UserService";

const SignIn = () => {
  const [formData, setFormData, onChangeHandler] = useUserForm();

  const history = useHistory();

  //로그인!
  const onSubmit = async () => {
    const { username, password } = formData;

    try {
      const response = await UserService.signin(username, password);
      const data = response?.data;
      if (data.accessToken) {
        console.log("로그인 성공!");
        TokenService.setToken(data.accessToken);
        history.push("/");
      }
    } catch (e) {
      alert("회원 정보를 다시 확인해 주세요!");
      setFormData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={onChangeHandler}
      />{" "}
      <br />
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={onChangeHandler}
      />{" "}
      <br />
      <button onClick={onSubmit}>로그인</button>
    </form>
  );
};

export default SignIn;
