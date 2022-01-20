import { TTButton } from "./style/styleModules";
import TTHeader from "./components/header";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import styled from "styled-components";
import SignUp from "./pages/signup";
import FindPass from "./pages/passwordFInd";
import ShowTest from "./pages/todo/test";
import { Routes, Route, BrowserRouter, Link, Router } from "react-router-dom";
import CreateTodo from "./pages/todo/createTodo";
import TodoList from "./pages/todo/todoList";
import UserInfo from "./pages/userInfo";
import Stats from "./pages/todo/stats";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <TTHeader></TTHeader>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/findpass" element={<FindPass />}></Route>
          <Route path="/todo/create" element={<CreateTodo />}></Route>
          <Route path="/todo/list" element={<TodoList />}></Route>
          <Route path="/userinfo" element={<UserInfo />}></Route>
          <Route path="/todo/stats" element={<Stats />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
