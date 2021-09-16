export default class TokenService {
  private static TOKEN_KEY = "KEY";

  public static getToken() {
    return localStorage.getItem(TokenService.TOKEN_KEY);
  }

  public static setToken(token: string) {
    return localStorage.setItem(TokenService.TOKEN_KEY, token);
  }

  public static removeToken() {
    localStorage.removeItem(TokenService.TOKEN_KEY);
  }
}
