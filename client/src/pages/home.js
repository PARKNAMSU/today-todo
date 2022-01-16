import React from "react";
import styled from "styled-components";
import { TTButton } from "../style/styleModules";
import TodoIcon from "../images/list.png";
import listIcon from "../images/listing.png";
import statsIcon from "../images/stats.png";
const HomeContainer = styled.div`
  width: 100%;
  height: 450px;
  background-color: ${(props) => props.bgk || "inherit"};
  padding-top: ${(props) => props.paddingTop || "0px"};
  padding-left: 13%;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  ${(props) => (props.isRight ? "margin-left:auto;" : "")}
  ${(props) =>
    props.isFlex
      ? `display:flex;
        justify-content: flex-start;
        flex-direction:column;
        align-items: center;
        padding-left: 0%;`
      : ""};
`;
const HomeTitle = styled.div`
  color: #4f3b30;
  font-size: 25px;
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-decoration: none;
  transition: 0.25s;
  &:hover {
    font-size: 28px;
    transition: 0.25s;
  }
`;
const HomeSubTitle = styled.div`
  width: 283px;
  color: #705446;
  font-size: 15px;
  text-decoration: none;
  line-height: 150%;
`;
const HomeBoxChild = styled.div`
  & > h2 {
  }
`;
const HomeBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  ${HomeBoxChild} {
    display: flex;
    flex: 1 1 180px;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    height: 150px;
    cursor: pointer;
    font-size: 15px;
    color: #705446;
  }
`;
const HomeIcon = styled.img`
  width: 64px;
  height: 64px;
  transition: 0.25s;
  &:hover {
    width: 76px;
    height: 76px;
    transition: 0.25s;
  }
`;
const HomeBottomBox = styled.div`
  width: 50%;
  margin-left: auto;
  @media screen and (max-width: 992px) {
    margin-left: 0px;
  }
`;
const Home = () => {
  return (
    <div>
      <HomeContainer paddingTop={"100px"} bgk={"#f0b495"}>
        <HomeTitle>오늘의 할일을 작성해 보세요!</HomeTitle>
        <HomeSubTitle>
          하루동인 할 일을 계획적으로 작성해 보세요. 하루를 계획적으로 보내면
          습관이 됩니다!
        </HomeSubTitle>
        <TTButton fontSize={"15px"} marginTop={""} marginLeft={"0px"}>
          Todo 생성
        </TTButton>
      </HomeContainer>
      <HomeContainer isFlex={true} paddingTop={"46px"}>
        <HomeTitle>주요기능</HomeTitle>
        <HomeBox isCol={false}>
          <HomeBoxChild>
            <HomeIcon src={TodoIcon}></HomeIcon>
            <h2>Todo 생성</h2>
          </HomeBoxChild>
          <HomeBoxChild>
            <HomeIcon src={listIcon}></HomeIcon>
            <h2>할일 목록</h2>
          </HomeBoxChild>
          <HomeBoxChild>
            <HomeIcon src={statsIcon}></HomeIcon>
            <h2>통계</h2>
          </HomeBoxChild>
        </HomeBox>
      </HomeContainer>
      <HomeContainer bgk={"#f5cfbc"} paddingTop={"46px"}>
        <HomeBottomBox>
          <HomeTitle>과거 흔적들을 확인하세요!</HomeTitle>
          <HomeSubTitle>
            햔재의 나를 위해 과거에 내가 계획을 얼마나 수행했나 확인해 보세요!
          </HomeSubTitle>
          <TTButton fontSize={"15px"} marginTop={""} marginLeft={"0px"}>
            과거 기록
          </TTButton>
        </HomeBottomBox>
      </HomeContainer>
    </div>
  );
};

export default Home;
