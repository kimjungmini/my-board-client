import { AxiosResponse } from "axios";
import UserService from "../service/UserService";
import { useHistory } from "react-router";
import { useUserForm } from "../hooks/useUserForm";

const SignUp = () => {
  const [formData, setFormData, onChangeHandler] = useUserForm();
  const history = useHistory();

  //회원가입!
  const onSubmit = async () => {
    const { username, password } = formData;
    try {
      const response = (await UserService.signup(username, password))
        ?.data as AxiosResponse;
      history.push("/");
    } catch (e) {
      alert("입력 정보를 다시 확인해 주세요!");
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
      <button onClick={onSubmit}>회원가입</button>
    </form>
  );
};

export default SignUp;
