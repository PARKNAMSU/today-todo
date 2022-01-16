import { TTButton } from "./style/styleModules";
import TTHeader from "./components/header";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import styled from "styled-components";
import SignUp from "./pages/signup";
import FindPass from "./pages/passwordFInd";
import { Routes, Route, BrowserRouter, Link, Router } from "react-router-dom";

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
          <Route path="/path1"></Route>
          <Route path="/path2"></Route>
          <Route path="/path3"></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/findpass" element={<FindPass />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
