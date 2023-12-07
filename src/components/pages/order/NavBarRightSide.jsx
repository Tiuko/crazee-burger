import styled from "styled-components";
import PropTypes from "prop-types";
import Profile from "./Profile.jsx";

const NavBarRightSide = ({ username }) => {
  return (
    <NavBarRightSideStyled className="right-side">
      {/*<div className="admin-button">Admin Button</div>*/}
      <Profile username={username}/>
    </NavBarRightSideStyled>
  );
};

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  //.admin-button {
  //  background: lightblue;
  //}
  .profile {
    background: yellow;
  }
`;

NavBarRightSide.propTypes = {
  username: PropTypes.element,
};

export default NavBarRightSide;
