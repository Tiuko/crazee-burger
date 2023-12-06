import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarRightSide = ({ username }) => {
  return (
    <NavBarRightSideStyled className="right-side">
      Right<h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavBarRightSideStyled>
  );
};

const NavBarRightSideStyled = styled.div`
  background: purple;
`;

NavBarRightSide.propTypes = {
  username: PropTypes.element,
};

export default NavBarRightSide;
