import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../../../../theme/index.js";
import Header from "../../../../reusable-ui/Header.jsx";

const Total = ({ amountToPay }) => {
  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{amountToPay}</span>
      </TotalStyled>
    </Header>
  );
};

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;

Total.propTypes = {
  amountToPay: PropTypes.string,
};

export default Total;
