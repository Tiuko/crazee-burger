import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { theme } from "../../../../../theme/index.js";
import { formatPrice } from "../../../../../utils/maths.js";
import Header from "../../../../reusable-ui/Header.jsx";
import {calculateSumToPay} from './helper.js';

const Total = () => {
  const { basket, menu } = useContext(OrderContext);

  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{formatPrice(sumToPay)}</span>
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

export default Total;
