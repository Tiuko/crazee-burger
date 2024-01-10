import React from 'react';
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { theme } from "../../theme/index.js";

const TextInput = React.forwardRef(
    ({ onChange, Icon, className, version = "normal", ...extraProps }, ref) => {
      return (
          <TextInputStyled className={className} version={version}>
            <div className="icon">{Icon && Icon}</div>
            <input ref={ref} onChange={onChange} type="text" {...extraProps} />
          </TextInputStyled>
      )
    }
)

const TextInputStyled = styled.div`
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

  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.element,
  className: PropTypes.string,
  version: PropTypes.string,
};

export default TextInput;
