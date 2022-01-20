import React, { useState } from "react";
import styled from "styled-components";
import { TTButton, TodoContainer, TodoBox } from "../../style/styleModules";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
const options = { tables: true, emoji: true };
const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;
const OptionDiv = styled.div`
  width: 80%;
  text-aligh: left;
  display: flex;
  font-size: 12px;
  & > b {
    margin-right: 0.5em;
    & > span {
      color: #4f3b30;
    }
    & > select {
      border: none;
      color: black;
      font-size: 12px;
    }
  }
`;
const ModalBody = styled.div`
  z-index: 1;
  color:#b2876f;
  position: absolute;
  top: 23%;
  left: 50%;
  width: 60%;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: #f5f3ef;
  border-radius: 10px;
  box-shadow: 12px 12px 2px 1px #74513e;
  border: 2px solid #b2876f;
  transform: translateX(-50%) translateY(-50%);
  @media screen and (max-width: 968px) {
      width:95%;
  }
  & > p {
    margin-left auto;
    cursor: pointer;
    color: 
    &:hover {
      font-size: 18px;
    }
  }
  & > h2 {
    color: #4f3b30;
    margin-bottom:15px;
  }
  & > input,textarea {
    width: 80%;
    border: 2px solid #b2876f;
  }
`;
const LineDiv = styled.div`
  border: 1px solid #b2876f;
  width: 80%;
  margin-bottom: 1em;
`;
const ButtonDiv = styled.div`
  margin-left: auto;
`;

const text = `# Welcome to React Showdown :+1:

<br>

To get started, edit the markdown in \`example/src/App.tsx\`.

<br>

> hihi

- hihi

<br>

| Column 1 | Column 2 |
|----------|----------|
| A1       | B1       |
| A2       | B2       |`;
const CardModal = ({ cardClickHandle, data }) => {
  const [isModify, setIsModify] = useState(false);
  // todo data
  //   const [cardData, setCardData] = useState({
  //     id: data.id,
  //     title: data.title,
  //     content: data.content,
  //     time: data.time,
  //     important: data.important,
  //   });
  const modifyHandle = (isModButton) => {
    setIsModify(isModButton);
  };
  return (
    <ModalContainer>
      <ModalBody>
        <p onClick={cardClickHandle.bind(null, false)}>x</p>
        <OptionDiv>
          <b>
            중요도:{" "}
            {isModify ? (
              <select>
                <option>상</option>
                <option>중</option>
                <option>하</option>
              </select>
            ) : (
              <span>상</span>
            )}
          </b>
          <b>
            예상시간:
            {isModify ? (
              <select>
                <option>1h</option>
                <option>2h</option>
                <option>3h</option>
              </select>
            ) : (
              <span>5h</span>
            )}
          </b>
        </OptionDiv>
        <br />
        {isModify ? (
          <input
            type="text"
            placeholder="title"
            value={"Typcscript 스터디(title)"}
          />
        ) : (
          <h2>Typcscript 스터디(title)</h2>
        )}
        <LineDiv />
        {isModify ? (
          <textarea placeholder="content" rows={"15"}>
            {text}
          </textarea>
        ) : (
          <MarkdownView markdown={text} options={options}></MarkdownView>
        )}

        <ButtonDiv>
          {isModify ? (
            <TTButton
              padding={"0.5em 1em"}
              onClick={modifyHandle.bind(null, false)}
            >
              수정하기
            </TTButton>
          ) : (
            <TTButton
              padding={"0.5em 1em"}
              onClick={modifyHandle.bind(null, true)}
            >
              수정
            </TTButton>
          )}

          {isModify ? (
            <TTButton
              padding={"0.5em 1em"}
              onClick={modifyHandle.bind(null, false)}
            >
              취소
            </TTButton>
          ) : (
            <TTButton
              padding={"0.5em 1em"}
              onClick={cardClickHandle.bind(null, false)}
            >
              닫기
            </TTButton>
          )}
        </ButtonDiv>
      </ModalBody>
    </ModalContainer>
  );
};

export default CardModal;
