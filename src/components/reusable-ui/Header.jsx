import styled from "styled-components";
import PropTypes from "prop-types";
import {theme} from '../../theme/index.js';

const Header = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
`;

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
