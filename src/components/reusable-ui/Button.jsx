import styled from "styled-components";
import PropTypes from "prop-types";
import {theme} from '../../theme/index.js';

const Button = ({ label, Icon, className, version = "normal", onClick }) => {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func,
  className: PropTypes.string,
  version: PropTypes.string,
  onClick: PropTypes.func,
};

const ButtonStyled = styled.div`

`;


export default Button;
