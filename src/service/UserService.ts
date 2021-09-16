import axios, { AxiosError } from "axios";

export default class UserService {
  private static REQUESTURL = "http://localhost:5000/user";

  public static async signup(username: string, password: string) {
    try {
      const response = await axios.post(`${UserService.REQUESTURL}`, {
        username,
        password,
      });
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public static async signin(username: string, password: string) {
    try {
      const response = await axios.post(`${UserService.REQUESTURL}/signin`, {
        username,
        password,
      });
      return response;
    } catch (e) {
      const error = e as AxiosError;
      return error.response;
    }
  }
}
