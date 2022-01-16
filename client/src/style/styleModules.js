import styled, { css } from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
  @media screen and (max-width: 768px) {
    ${(props) => (props.isTodo ? "" : "padding-top: 70px;")}
  }
`;
const TodoBox = styled.div`
  display: flex;
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "550px"};
  background-color: ${(props) => props.bgColor || "#f5cfbc"};
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: #634b3e;
`;
const TTButton = styled.button`
  display: inline-block;
  padding: ${(props) => props.padding || "1.5em 2.6em"};
  border-radius: 0;
  color: #b2876f;
  margin-top: ${(props) => props.marginTop || "2rem"};
  margin-left: ${(props) => props.marginLeft || "2rem"};
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  transition: all 250ms ease;
  border: 0;
  outline: 0;
  font-size: ${(props) => props.fontSize || "0.8rem"};
  background-color: #f5f3ef;
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px solid;
    transition: 0.25s;
  }
  &:before {
    transform: translateX(-0.25em) translateY(0.25em);
  }
  &:after {
    transform: translateX(0.25em) translateY(-0.25em);
  }

  &:hover {
    &:before,
    &:after {
      transform: translateX(0) translateY(0);
    }
  }
`;
const EmailBox = styled.div`
  display: flex;
  width: 83%;
  justify-content: left;
  align-items: center;
  & > input {
    width: 68%;
    display: flex;
  }
`;
const EmailBoxButton = styled(TTButton)`
  display: flex;
  font-size: 15px;
  padding: 0.5em;
  margin-left: 0.5em;
`;
export { TTButton, EmailBox, EmailBoxButton, TodoContainer, TodoBox };
