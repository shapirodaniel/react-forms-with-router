import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 40px;
`;

const Logo = styled.span`
  font-size: 22px
  font-weight: bold;
`;

const LinksContainer = styled.div`
  & * {
    margin-left: 10px;
  }
  & .active {
    color: blue;
    border: 2px solid red;
    border-radius: 5px;
    padding: 10px;
  }
  & * {
    color: black;
  }
`;

export default {
  NavContainer,
  Logo,
  LinksContainer,
};
