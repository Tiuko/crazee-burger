import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../theme/index.js";

const PrimaryButton = ({ label, Icon }) => {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
};

const PrimaryButtonStyled = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.heavy};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    transition: all 200ms ease-in-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

PrimaryButton.propTypes = {
  label: PropTypes.string,
  Icon: PropTypes.element,
};

export default PrimaryButton;
