import { useEffect, useState } from "react";
import TokenService from "../service/TokenService";

const Home = () => {
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    setToken(TokenService.getToken());
  }, [token]);

  const onClick = () => {
    TokenService.removeToken();
    setToken(null);
  };

  if (token) {
    return (
      <div>
        안녕하세요 회원님!
        <button onClick={onClick}>로그아웃</button>
      </div>
    );
  }
  return <div>비로그인 상태</div>;
};

export default Home;
