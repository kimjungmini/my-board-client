import axios, { AxiosError } from "axios";
import { User } from "../components/Header";
import TokenService from "./TokenService";

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
      throw e;
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
      throw e;
    }
  }

  public static async getUserByToken(): Promise<User | null> {
    try {
      const token = TokenService.getToken();
      const response = await axios.post<User | null>(
        `${UserService.REQUESTURL}/auth`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
