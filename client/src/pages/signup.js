import React from "react";
import styled from "styled-components";
import { TTButton, EmailBox, EmailBoxButton } from "../style/styleModules";
import { useNavigate } from "react-router-dom";
const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-top: 70px;
  }
`;
const SignInBox = styled.div`
  display: flex;
  width: 500px;
  height: 838px;
  background-color: #f5cfbc;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: #634b3e;
  & > h2 {
    color: #b2876f;
    font-size: 25px;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 40%;
    width: 100%;
    & > input {
      width: 80%;
      display: flex;
    }
  }
  & > img {
    width: 128px;
    height: 128px;
  }
  @media screen and (max-width: 768px) {
    background-color: inherit;
  }
`;
const SignInLine = styled.div`
  border: thin solid #b2876f;
  width: 80%;
`;
const SignInButton = styled(TTButton)`
  font-size: 20px;
  width: 60%;
  padding: 0.5em;
`;
const SignInBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding-top: 20px;
  & > p {
    font-size: 12px;
    & > span {
      color: #100c0a;
      &: hover {
        color: #a78572;
        cursor: pointer;
      }
    }
  }
`;

const SignUp = () => {
  let navigate = useNavigate();
  return (
    <SignInContainer>
      <SignInBox>
        <h2>Today Todo SignUp</h2>
        <img src="https://img.icons8.com/pastel-glyph/64/000000/login-rounded-right.png" />
        <div>
          <EmailBox>
            <input type="text" placeholder="email"></input>
            <EmailBoxButton marginTop={"0px"} marginLeft={"0px"}>
              인증번호 발급
            </EmailBoxButton>
          </EmailBox>
          <input type="password" placeholder="password"></input>
          <input type="password" placeholder="password check"></input>
          <input type="text" placeholder="name"></input>
          <SignInButton marginLeft={"0px"} marginTop={"0px"}>
            회원가입
          </SignInButton>
          <SignInBottom>
            <p>
              계정이 이미 있으신가요?{" "}
              <span onClick={navigate.bind(null, "/signin")}>로그인</span>
            </p>
            <p>
              비밀번호를 잊어버렸나요?{" "}
              <span onClick={navigate.bind(null, "/findpass")}>
                비밀번호 찾기
              </span>
            </p>
          </SignInBottom>
        </div>
      </SignInBox>
    </SignInContainer>
  );
};

export default SignUp;
