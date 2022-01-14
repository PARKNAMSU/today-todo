import styled from "styled-components";

const TTHeaderTop = styled.div`
  width: 100%;
  position: fixed;
  background: white;
  padding: 10px 0;
  color: #fff;
  top: 0;
`;

const TTHeaderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TTNav = styled.nav`
  color: #b2876f;
  padding: 7px 25px;
  display: inline-block;
`;
const TTA = styled.a`
  color: #b2876f;
  padding: 7px 25px;
  display: inline-block;
  &:hover {
    color: white;
    background-color: #b2876f;
  }
`;

const TTHeader = () => {
  return (
    <TTHeaderTop>
      <TTHeaderContainer>
        <TTNav>
          <TTA>home</TTA>
          <TTA>home</TTA>
          <TTA>home</TTA>
          <TTA>home</TTA>
        </TTNav>
      </TTHeaderContainer>
    </TTHeaderTop>
  );
};

export default TTHeader;
