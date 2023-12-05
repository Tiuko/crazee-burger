import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Navbar = ({ username }) => {
  return (
    <NavbarStyled className="navbar">
      Navbar
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  background-color: blue;
  height: 10vh;
`;

Navbar.propTypes = {
  username: PropTypes.element,
};

export default Navbar;
