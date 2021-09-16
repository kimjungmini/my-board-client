import { AxiosResponse } from "axios";
import React, { useState } from "react";
import UserService from "../service/UserService";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    const { username, password } = formData;
    try {
      const response = (await UserService.signup(username, password))
        ?.data as AxiosResponse;
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="username" onChange={onChangeHandler} /> <br />
      <input type="text" name="password" onChange={onChangeHandler} /> <br />
      <button onClick={onSubmit}>회원가입</button>
    </form>
  );
};

export default SignUp;
