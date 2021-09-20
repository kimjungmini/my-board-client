import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import PostService from "../service/PostService";
import TokenService from "../service/TokenService";
import Header from "./Header";

const Home = () => {
  const [token, setToken] = useState<string | null>("");
  const [posts, setPosts] = useState<any>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setToken(TokenService.getToken());

    async function fetchPosts() {
      try {
        const posts = await PostService.getAllPosts();
        setPosts(posts);
        console.log(posts);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPosts();
  }, [token]);

  const onClick = () => {
    TokenService.removeToken();
    setToken(null);
  };

  if (token) {
    return (
      <div>
        <Header />
        <button onClick={onClick}>로그아웃</button>
        <hr />
        <div>
          {posts.map((post: any) => {
            return (
              <div>
                {post.id} {post.subject} {post.content} {post.user.username}`
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <div>비로그인 상태</div>;
};

export default Home;
