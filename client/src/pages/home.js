import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { TTButton } from '../style/styleModules';
import TodoIcon from '../images/list.png';
import listIcon from '../images/listing.png';
import statsIcon from '../images/stats.png';
import { useNavigate } from 'react-router-dom';
import TTModal from '../components/modal';
import { userApi } from '../api/userApi';
const HomeContainer = styled.div`
    width: 100%;
    height: 450px;
    background-color: ${(props) => props.bgk || 'inherit'};
    padding-top: ${(props) => props.paddingTop || '0px'};
    padding-left: 13%;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    ${(props) => (props.isRight ? 'margin-left:auto;' : '')}
    ${(props) =>
        props.isFlex
            ? `display:flex;
        justify-content: flex-start;
        flex-direction:column;
        align-items: center;
        padding-left: 0%;`
            : ''};
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
const Home = ({ userInfoHandle, userInfo, isLogin }) => {
    let navigate = useNavigate();
    const [isModal, setIsModal] = useState(false);
    const [modalContent, setModalContent] =
        useState('????????? ???????????? ?????? ???????????????.');
    const [modalTitle, setModalTitle] = useState('????????? ??????');
    const handleClickModal = () => {
        setIsModal(true);
    };
    const modalCancelHandle = () => {
        setIsModal(false);
    };

    useEffect(async () => {
        let token = window.localStorage.getItem('accessToken');
        console.log(token);
        userApi
            .getUser(token)
            .then((res) => {
                userInfoHandle(res.data.data, true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);
    return (
        <div>
            {isModal ? (
                <TTModal
                    cancelHandle={modalCancelHandle}
                    content={modalContent}
                    title={modalTitle}
                />
            ) : (
                ''
            )}
            <HomeContainer paddingTop={'100px'} bgk={'#f0b495'}>
                <HomeTitle>????????? ????????? ????????? ?????????!</HomeTitle>
                <HomeSubTitle>
                    ???????????? ??? ?????? ??????????????? ????????? ?????????. ????????? ???????????????
                    ????????? ????????? ?????????!
                </HomeSubTitle>
                <TTButton
                    fontSize={'15px'}
                    marginTop={''}
                    marginLeft={'0px'}
                    onClick={navigate.bind(null, '/todo/create')}
                >
                    Todo ??????
                </TTButton>
            </HomeContainer>
            <HomeContainer isFlex={true} paddingTop={'46px'}>
                <HomeTitle>????????????</HomeTitle>
                <HomeBox isCol={false}>
                    <HomeBoxChild>
                        <HomeIcon src={TodoIcon}></HomeIcon>
                        <h2>Todo ??????</h2>
                    </HomeBoxChild>
                    <HomeBoxChild>
                        <HomeIcon src={listIcon}></HomeIcon>
                        <h2>?????? ??????</h2>
                    </HomeBoxChild>
                    <HomeBoxChild>
                        <HomeIcon src={statsIcon}></HomeIcon>
                        <h2>??????</h2>
                    </HomeBoxChild>
                </HomeBox>
            </HomeContainer>
            <HomeContainer bgk={'#f5cfbc'} paddingTop={'46px'}>
                <HomeBottomBox>
                    <HomeTitle>?????? ???????????? ???????????????!</HomeTitle>
                    <HomeSubTitle>
                        ????????? ?????? ?????? ????????? ?????? ????????? ????????? ????????????
                        ????????? ?????????!
                    </HomeSubTitle>
                    <TTButton
                        fontSize={'15px'}
                        marginTop={''}
                        marginLeft={'0px'}
                        onClick={handleClickModal}
                    >
                        ?????? ??????
                    </TTButton>
                </HomeBottomBox>
            </HomeContainer>
        </div>
    );
};

export default Home;
