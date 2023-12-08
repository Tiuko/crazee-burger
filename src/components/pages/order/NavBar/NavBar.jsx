import styled from "styled-components";
import PropTypes from "prop-types";
import NavBarRightSide from "./NavBarRightSide.jsx";
import Logo from "../../../reusable-ui/Logo.jsx";
import { theme } from "../../../../theme/index.js";
import {refreshPage} from '../../../../utils/helpers.js';

const NavBar = ({ username }) => {
  return (
    <NavbarStyled className="navbar">
      <Logo className="logo-order-page" onClick={refreshPage}/>
      <NavBarRightSide username={username} />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  background-color: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-top-left-radius: ${theme.borderRadius.extraRound};
    border-bottom: 1px solid ${theme.colors.greyLight};
  //align-items: center;
    
    .logo-order-page {
        cursor: pointer;
    } 
`;

NavBar.propTypes = {
  username: PropTypes.element,
};

export default NavBar;
