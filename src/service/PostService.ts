import axios, { AxiosError } from "axios";
import { User } from "../components/Header";
import TokenService from "./TokenService";

export default class PostService {
  private static REQUESTURL = "http://localhost:5000/post";

  public static async getAllPosts() {
    try {
      const response = await axios.get(`${PostService.REQUESTURL}`);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
