import styled from "styled-components";
import PropTypes from "prop-types";
import NavBarRightSide from "./NavBarRightSide.jsx";
import NavBarLeftSide from "./NavBarLeftSide.jsx";

const NavBar = ({ username }) => {
  return (
    <NavbarStyled className="navbar">
      <NavBarLeftSide />
      <NavBarRightSide username={username} />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  background-color: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  //align-items: center;
`;

NavBar.propTypes = {
  username: PropTypes.element,
};

export default NavBar;
