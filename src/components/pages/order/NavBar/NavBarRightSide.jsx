import PropTypes from "prop-types";
import Profile from "./Profile.jsx";
import ToggleButton from "../../../reusable-ui/ToggleButton.jsx";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useState } from "react";

const NavBarRightSide = ({ username }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavBarRightSideStyled className="right-side">
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
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
`;

NavBarRightSide.propTypes = {
  username: PropTypes.string,
};

export default NavBarRightSide;
