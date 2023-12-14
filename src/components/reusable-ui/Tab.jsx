import styled from "styled-components";
import { theme } from "../../theme/index.js";
import PropTypes from "prop-types";

const Tab = ({ Icon, onClick, className }) => {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{Icon}</div>
    </TabStyled>
  );
};

Tab.propTypes = {
  Icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;

  // flex
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: relative;
  left: 5%;
  top: 1px;

  // fonts
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  // border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  // border radius
  border-radius: 5px 5px 0 0;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }

  .icon {
    display: flex;
  }
`;

export default Tab;
