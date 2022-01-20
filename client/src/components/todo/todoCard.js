import React from "react";
import styled from "styled-components";
import { TTButton, TodoContainer, TodoBox } from "../../style/styleModules";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";

const TodoCardBox = styled.div`
  height: 350px;
  width: 305px;
  border: 2px solid #b2876f;
  border-radius: 3px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  box-shadow: 12px 12px 2px 1px #74513e;
  transition: 0.25s;
  cursor: pointer;
  & > div {
    width: 80%;
    display: flex;
    justify-content: end;
    & > span {
      color: #f0b495;
    }
  }
  &:hover {
    height: 380px;
    width: 328px;
    transition: 0.25s;
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
const TodoCard = ({ title, hour, cardClickHandle }) => {
  return (
    <TodoCardBox onClick={cardClickHandle}>
      <h2>Typcscript 스터디</h2>
      <div>
        Estimated time:&nbsp;<span> 5h</span>
      </div>
      <div>
        importance:&nbsp;<span> 상</span>
      </div>
      <ButtonDiv>
        <TTButton padding={"0.5em 1em"} marginLeft={"0px"}>
          완료
        </TTButton>
        <TTButton padding={"0.5em 1em"}>삭제</TTButton>
      </ButtonDiv>
    </TodoCardBox>
  );
};

export default TodoCard;
