import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Navbar = ({ username }) => {
  return (
    <NavbarStyled className="navbar">
      <div className="left-side">Left</div>
      <div className="right-side">
        Right<h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  background-color: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  //align-items: center;

  .left-side {
    background: pink;
  }

  .right-side {
    background: purple;
  }
`;

Navbar.propTypes = {
  username: PropTypes.element,
};

export default Navbar;
