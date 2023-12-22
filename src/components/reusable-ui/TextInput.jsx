import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../theme/index.js";

const TextInput = ({ onChange, Icon, className, ...extraProps }) => {
  return (
    <InputStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <input onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
};

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 0 8px 0 10px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
  }

  input::placeholder {
    color: ${theme.colors.greyMedium};
  }
`;

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.element,
  className: PropTypes.string,
};

export default TextInput;
