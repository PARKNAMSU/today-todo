import React from "react";
import styled from "styled-components";
import { TTButton, TodoContainer, TodoBox } from "../style/styleModules";

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
const ModalBody = styled.div`
  z-index: 1;
  color:#b2876f;
  position: absolute;
  top: 23%;
  left: 50%;
  width: 400px;
  padding: 40px;
  text-align: center;
  background-color: #f5f3ef;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translateX(-50%) translateY(-50%);
  & > p {
    text-align: right;
    cursor: pointer;
    color: 
    &:hover {
      font-size: 15px;
    }
  }
  & > h4 {
    color: #4f3b30;
    margin-bottom:15px;
  }
`;
const TTModal = ({ cancelHandle, content, title }) => {
  return (
    <ModalContainer>
      <ModalBody>
        <p onClick={cancelHandle}>x</p>
        <h4>{title}</h4>
        {content}
      </ModalBody>
    </ModalContainer>
  );
};

export default TTModal;
