import { useEffect, useState } from "react";
import TokenService from "../service/TokenService";
import UserService from "../service/UserService";

export interface User {
  id: number | null;
  username: string | null;
}

const Header = () => {
  const [token, setToken] = useState<string | null>("");
  const [user, setUser] = useState<User | null>({
    id: null,
    username: "",
  });

  useEffect(() => {
    setToken(TokenService.getToken());

    async function fetchUser() {
      const data = await UserService.getUserByToken();
      setUser(data);
    }
    fetchUser();
  }, []);

  if (user) {
    return <header>안녕하세요 {user.username} 님!</header>;
  }
  return <div>비로그인 상태</div>;
};

export default Header;
