import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { TTButton } from '../style/styleModules';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../api/userApi';
const SignInContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
    width: 100%;
    @media screen and (max-width: 768px) {
        padding-top: 70px;
    }
`;
const SignInBox = styled.div`
    display: flex;
    width: 500px;
    height: 550px;
    background-color: #f5cfbc;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    color: #634b3e;
    & > h2 {
        color: #b2876f;
        font-size: 25px;
    }
    & > div {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 40%;
        width: 100%;
        & > input {
            width: 80%;
            display: flex;
        }
    }
    & > img {
        width: 128px;
        height: 128px;
    }
    @media screen and (max-width: 768px) {
        background-color: inherit;
    }
`;
const SignInLine = styled.div`
    border: thin solid #b2876f;
    width: 80%;
`;
const SignInButton = styled(TTButton)`
    font-size: 20px;
    width: 60%;
    padding: 0.5em;
`;
const SignInBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding-top: 20px;
    & > p {
        font-size: 12px;
        & > span {
            color: #100c0a;
            &: hover {
                color: #a78572;
                cursor: pointer;
            }
        }
    }
`;
const SignIn = () => {
    let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let emailPutHandler = (e) => setEmail(e.target.value);

    let passwordPutHandler = (e) => setPassword(e.target.value);
    let loginHandler = async () => {
        if (email.length < 4 || password.length < 4) {
            console.log('fail');
            return;
        }
        userApi
            .login({ email, password })
            .then((res) => {
                window.localStorage.setItem('accessToken', res.data.token);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <SignInContainer>
            <SignInBox>
                <h2>Today Todo SignIn</h2>
                <img src="https://img.icons8.com/pastel-glyph/64/000000/login-rounded-right.png" />
                <div>
                    <input
                        type="text"
                        placeholder="email"
                        onKeyUp={emailPutHandler}
                    ></input>
                    <input
                        type="password"
                        placeholder="password"
                        onKeyUp={passwordPutHandler}
                    ></input>
                    <SignInLine></SignInLine>
                    <SignInButton
                        marginLeft={'0px'}
                        marginTop={'0px'}
                        onClick={loginHandler}
                    >
                        ?????????
                    </SignInButton>
                    <SignInBottom>
                        <p>
                            ????????? ????????????????{' '}
                            <span onClick={navigate.bind(null, '/signup')}>
                                ????????????
                            </span>
                        </p>
                        <p>
                            ??????????????? ???????????????????{' '}
                            <span onClick={navigate.bind(null, '/findpass')}>
                                ???????????? ??????
                            </span>
                        </p>
                    </SignInBottom>
                </div>
            </SignInBox>
        </SignInContainer>
    );
};

export default SignIn;
