import React from "react";
import styled from "styled-components";
import { TTButton, TodoContainer, TodoBox } from "../../style/styleModules";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
import CreateCard from "../../components/todo/createCard";

const options = { tables: true, emoji: true };
const TodoCreateBox = styled(TodoBox)`
  @media screen and (max-width: 968px) {
    width: 80%;
  }
  & > h1 {
    margin-bottom: 15px;
  }
`;

const CreateTodo = () => {
  return (
    <TodoContainer isTodo={true}>
      <TodoCreateBox width={"60%"} height={"100%"} bgColor={"inherit"}>
        <h1>Todo Create</h1>
        <CreateCard />
      </TodoCreateBox>
    </TodoContainer>
  );
};

export default CreateTodo;
