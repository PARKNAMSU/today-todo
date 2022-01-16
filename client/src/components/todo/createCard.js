import React from "react";
import styled from "styled-components";
import { TTButton, TodoContainer, TodoBox } from "../../style/styleModules";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
const TodoCreateCard = styled.div`
  width: 100%;
  border: 2px solid #b2876f;
  height: 500px;
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  box-shadow: 12px 12px 2px 1px #74513e;
  & > input {
    width: 80%;
    border: 2px solid #b2876f;
  }
  & > textarea {
    width: 80%;
    border: 2px solid #b2876f;
  }
`;
const SelectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  & > div {
    width: 30%;
    @media screen and (max-width: 968px) {
      width: 45%;
    }
    & > select {
      border: none;
      color: #b2876f;
      font-size: 15px;
    }
  }
`;
const TimeInput = styled.input`
  width: 23%;
  border: 2px solid #b2876f;
  border: none;
  color: #b2876f;
  font-size: 15px;
  @media screen and (max-width: 968px) {
    width: 50%;
  }
`;
const TimeDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  & > p {
    font-size: 15px;
    padding: 1.2em 1em;
  }
`;
const contentKeyUpHandle = (e) => {
  console.log(e.target.value);
};
const titleKeyUpHandle = (e) => {
  console.log(e.target.value);
};
const importHandle = (e) => {
  console.log(e.target.value);
};
const timeHandle = (e) => {
  console.log(e.target.value);
};
const dateHandle = (e) => {
  console.log(e.target.value);
};
const CreateCard = () => {
  return (
    <TodoCreateCard>
      <div>
        <TTButton padding={"0.5em 1em"}>Write</TTButton>
        <TTButton padding={"0.5em 1em"}>Cancel</TTButton>
      </div>
      <TimeDiv>
        <p>날짜:</p>
        <TimeInput type="date" onChange={dateHandle}></TimeInput>
      </TimeDiv>
      <input type="text" placeholder="title" onKeyUp={titleKeyUpHandle}></input>
      <textarea
        rows={"15"}
        placeholder="content"
        onKeyUp={contentKeyUpHandle}
      ></textarea>
      <SelectDiv>
        <div>
          중요도:
          <select name="중요도" onChange={importHandle}>
            <option value="top">상</option>
            <option value="mid">중</option>
            <option value="low">하</option>
          </select>
        </div>
        <div>
          예상시간:
          <select name="예상시간" onChange={timeHandle}>
            <option>30min</option>
            <option>1h</option>
            <option>2h</option>
            <option>3h</option>
            <option>4h</option>
            <option>5h</option>
            <option>6h</option>
            <option>7h</option>
            <option>8h</option>
            <option>9h</option>
          </select>
        </div>
      </SelectDiv>
    </TodoCreateCard>
  );
};

export default CreateCard;
