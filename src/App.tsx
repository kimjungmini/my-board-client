import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/update/:id">
          글수정
        </Route>
        <Route exact path="/add">
          글작성
        </Route>
        <Route exact path="/user/signin">
          <SignIn />
        </Route>
        <Route exact path="/user/signup">
          <SignUp />
        </Route>
        <Route exact path="/read/:id">
          글상세보기
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">Not Found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
