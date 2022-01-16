import styled from "styled-components";
import {
  Switch,
  Route,
  BrowserRouter,
  Link,
  useNavigate,
} from "react-router-dom";
const TTHeaderTop = styled.div`
  width: 100%;
  position: fixed;
  background: #f0b495;
  padding: 10px 0;

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
  margin-left: auto;
  &:hover {
    color: #634b3e;
    background-color: inherit;
    transition: 0.25s;
  }
  `
      : ""}
`;
document.addEventListener("scroll", function () {
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

const TTHeader = () => {
  let navigate = useNavigate();
  return (
    <TTHeaderTop className="headerDiv">
      <TTHeaderContainer>
        <TTNav className="hearderNav">
          <Link to="/">
            <TTA className="headerButton">home</TTA>
          </Link>
          <Link to="/path1">
            <TTA className="headerButton">todo</TTA>
          </Link>
          <Link to="/path2">
            <TTA className="headerButton">today</TTA>
          </Link>
          <Link to="/path3">
            <TTA className="headerButton">stats</TTA>
          </Link>
          <TTA
            className="headerButton"
            isSignin={true}
            onClick={navigate.bind(null, "/signin")}
          >
            Sign In
          </TTA>
        </TTNav>
      </TTHeaderContainer>
    </TTHeaderTop>
  );
};

export default TTHeader;
