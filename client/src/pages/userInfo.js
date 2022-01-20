import React, { useState } from "react";
import styled from "styled-components";
import { TTButton, TodoContainer, TodoBox, TTA } from "../style/styleModules";
import TodoIcon from "../images/list.png";
import listIcon from "../images/listing.png";
import statsIcon from "../images/stats.png";
import { useNavigate } from "react-router-dom";
import TTModal from "../components/modal";

const UserInfoBox = styled(TodoBox)`
  @media screen and (max-width: 968px) {
    width: 100%;
  }
  & > h1 {
    margin-bottom: 15px;
  }
`;
const TTADiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.isLeft ? "left" : props.isCenter ? "center" : "right"};
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;
const LineDiv = styled.div``;
const UserBox = styled.div`
  width: 60%;
  height: 300px;
  border: 2px solid #b2876f;
  border-radius: 3px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  box-shadow: 12px 12px 2px 1px #74513e;
  @media screen and (max-width: 968px) {
    width: 95%;
  }
  & > div {
    width: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
    & > span {
      color: #b2876f;
      margin-left: 1em;
    }
    & > input {
      width: 80%;
      border: 2px solid #b2876f;
      margin-top: 0px;
      margin-left: 1em;
    }
  }
  ${LineDiv} {
    width: 100%;
    border: 1px solid #b2876f;
  }
`;
const ButtonDiv = styled.nav`
  width: 80%;
  display: flex;
  justify-content: center;
  & > span {
    color: #f0b495;
  }
`;

const UserInfo = () => {
  return (
    <TodoContainer>
      <UserInfoBox width={"75%"} height={"100%"} bgColor={"#f5f3ef"}>
        <h1>User Infomation</h1>
        <TTADiv isCenter={true}>
          <TTA isSignin={true}>User Infomation</TTA>
          <TTA isSignin={true}>Password Change</TTA>
        </TTADiv>
        <UserBox>
          <h2>user infomation</h2>
          <LineDiv />
          <div>
            email <span>sksk@naver.com</span>
          </div>
          <div>
            name <input type="text" value={"nspark"} placeholder={"name"} />
          </div>
          <ButtonDiv>
            <TTButton padding={"0.5em 1em"}>변경</TTButton>
            <TTButton padding={"0.5em 1em"}>취소</TTButton>
          </ButtonDiv>
        </UserBox>
      </UserInfoBox>
    </TodoContainer>
  );
};

export default UserInfo;
