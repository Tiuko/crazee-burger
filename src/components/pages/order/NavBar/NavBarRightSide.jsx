import styled from "styled-components";
import PropTypes from "prop-types";
import Profile from "./Profile.jsx";
import ToggleButton from "../../../reusable-ui/ToggleButton.jsx";

const NavBarRightSide = ({ username }) => {
  return (
    <NavBarRightSideStyled className="right-side">
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
      />
      <Profile username={username} />
    </NavBarRightSideStyled>
  );
};

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  gap: 50px;

  .profile {
    background: yellow;
  }
`;

NavBarRightSide.propTypes = {
  username: PropTypes.string,
};

export default NavBarRightSide;
