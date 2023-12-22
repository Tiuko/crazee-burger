import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../theme/index.js";

const TextInput = ({ onChange, Icon, ...extraProps }) => {
  return (
    <InputStyled>
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
  margin: 18px 0;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;
    margin-right: 8px;
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
};

export default TextInput;
