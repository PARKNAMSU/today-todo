import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    Switch,
    Route,
    BrowserRouter,
    Link,
    useNavigate,
} from 'react-router-dom';
import { userApi } from '../api/userApi';
const TTHeaderTop = styled.div`
    width: 100%;
    position: fixed;
    background: #f0b495;
    padding: 10px 0;
    z-index: 1;
    top: 0;
`;

const TTHeaderContainer = styled.div`
    width: 80%;
    display: inline-flex;
    justify-content: right;
`;

const TTNav = styled.nav`
    width: 86%;
    color: #b2876f;
    padding: 7px 0px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    bacground-color: #f0b495;
    & > a {
        display: inline-flex;
    }
`;

const LastDiv = styled.div`
    width: 110px;
    margin-left: auto;
    & > div {
        width: 110px;
        position: absolute;
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
  width:100%;
  color: #e3ab8d;
  background-color: #634b3e;
  transition: 0.25s;
  border-radius:3px;
  display: inline-flex;
  margin-left: auto;
  &:hover {
    color: #634b3e;
    background-color: inherit;
    transition: 0.25s;
  }
  `
            : ''}
    ${(props) => (props.isLogin ? 'width:100%;  border-radius:0px;' : '')}
    ${(props) => (props.isToggle ? '' : '')}
`;
document.addEventListener('scroll', function () {
    //   const header = document.querySelector(".headerDiv");
    //   const hearderNav = document.querySelectorAll(".hearderNav");
    //   let currentScrollValue = document.documentElement.scrollTop;
    //   if (currentScrollValue > 1) {
    //     if (header) header.style.backgroundColor = "white";
    //     if (hearderNav) hearderNav.style.backgroundColor = "white";
    //   } else {
    //     if (header) header.style.backgroundColor = "#f0b495";
    //     if (hearderNav) hearderNav.style.backgroundColor = "#f0b495";
    //   }
});

const TTHeader = ({ isLogin, userInfo, userInfoHandle }) => {
    let navigate = useNavigate();
    let [isLastButtonClick, setIsLastButtonClick] = useState(false);
    const lastButtonHandle = () => {
        setIsLastButtonClick(!isLastButtonClick);
    };
    const signOutHandle = async () => {
        window.localStorage.clear();
        await userApi.logout();
        userInfoHandle({}, false);
        setIsLastButtonClick(false);
        navigate('/signin');
    };
    return (
        <TTHeaderTop className="headerDiv">
            <TTHeaderContainer>
                <TTNav className="hearderNav">
                    <Link to="/">
                        <TTA className="headerButton">home</TTA>
                    </Link>
                    <Link to="/todo/create">
                        <TTA className="headerButton">todo</TTA>
                    </Link>
                    <Link to="/todo/list">
                        <TTA className="headerButton">today</TTA>
                    </Link>
                    <Link to="/todo/stats">
                        <TTA className="headerButton">stats</TTA>
                    </Link>
                    <LastDiv>
                        {!isLogin ? (
                            <TTA
                                className="headerButton"
                                isSignin={true}
                                onClick={navigate.bind(null, '/signin')}
                            >
                                Sign In
                            </TTA>
                        ) : (
                            <TTA
                                className="headerButton"
                                isSignin={true}
                                onClick={lastButtonHandle}
                                isLogin={true}
                            >
                                {userInfo.name} 님
                            </TTA>
                        )}
                        {isLastButtonClick ? (
                            <div>
                                <TTA
                                    className="headerButton"
                                    isSignin={true}
                                    onClick={navigate.bind(null, '/userinfo')}
                                    isLogin={true}
                                    isToggle={true}
                                >
                                    내정보
                                </TTA>
                                <TTA
                                    className="headerButton"
                                    isSignin={true}
                                    onClick={signOutHandle}
                                    isLogin={true}
                                    isToggle={true}
                                >
                                    logout
                                </TTA>
                            </div>
                        ) : (
                            ''
                        )}
                    </LastDiv>
                </TTNav>
            </TTHeaderContainer>
        </TTHeaderTop>
    );
};

export default TTHeader;
