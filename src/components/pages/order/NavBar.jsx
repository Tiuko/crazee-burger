import styled from "styled-components";
import PropTypes from "prop-types";
import NavBarRightSide from "./NavBarRightSide.jsx";
import NavBarLeftSide from "./NavBarLeftSide.jsx";
import Logo from "../../reusable-ui/Logo.jsx";

const NavBar = ({ username }) => {
  return (
    <NavbarStyled className="navbar">
      <Logo />
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
  padding: 0 20px;
  //align-items: center;
`;

NavBar.propTypes = {
  username: PropTypes.element,
};

export default NavBar;
