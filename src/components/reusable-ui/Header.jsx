import styled from "styled-components";
import PropTypes from "prop-types";
import {theme} from '../../theme/index.js';

const Header = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`;

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
