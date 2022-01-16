import React, { useState } from "react";
import styled from "styled-components";
import { TTButton, TodoContainer, TodoBox } from "../../style/styleModules";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
import TodoCard from "../../components/todo/todoCard";

const options = { tables: true, emoji: true };

const CardDiv = styled.div``;
const TodoListBox = styled(TodoBox)`
  @media screen and (max-width: 968px) {
    width: 100%;
  }
  & > h1 {
    margin-bottom: 15px;
  }
  ${CardDiv} {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    flex-wrap: wrap;
  }
`;
const TTA = styled.button`
  color: #634b3e;
  padding: 7px 25px;
  background-color: inherit;
  border: none;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.25s;
  &:hover {
    color: #e3ab8d;
    background-color: #634b3e;
    transition: 0.25s;
  }
  ${(props) =>
    props.isSignin
      ? `
  color: #e3ab8d;
  background-color: #634b3e;
  transition: 0.25s;
  border-radius:3px;
  display: inline-flex;
  margin-left: 28px;
  &:hover {
    color: #634b3e;
    background-color: inherit;
    transition: 0.25s;
  }
  `
      : ""}
  @media screen and (max-width: 968px) {
    margin-left: 5px;
  }
`;

const TTADiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.isLeft ? "left" : "right")};
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;
const TimeInput = styled.input`
  width: 15%;
  border: 2px solid #b2876f;
  border: none;
  color: #b2876f;
  font-size: 15px;
  @media screen and (max-width: 968px) {
    width: 45%;
  }
`;
const TodoList = () => {
  const [selectDate, setSelectDate] = useState("2021-01-02");
  const dateChangeHandle = (e) => {
    setSelectDate(e.target.value);
  };
  return (
    <TodoContainer isTodo={true}>
      <TodoListBox width={"75%"} height={"100%"} bgColor={"#f5f3ef"}>
        <h1>Todo List {selectDate}</h1>
        <TTADiv isLeft={false}>
          <p>날짜 선택:</p>
          <TimeInput type="date" onChange={dateChangeHandle}></TimeInput>
        </TTADiv>
        <TTADiv isLeft={true}>
          <TTA isSignin={true}>Incomplete</TTA>
          <TTA isSignin={true}>Complete</TTA>
        </TTADiv>
        <CardDiv>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard> <TodoCard></TodoCard>
          <TodoCard></TodoCard> <TodoCard></TodoCard> <TodoCard></TodoCard>
          <TodoCard></TodoCard> <TodoCard></TodoCard>
        </CardDiv>
      </TodoListBox>
    </TodoContainer>
  );
};

export default TodoList;
