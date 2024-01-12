import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";
import Header from "../../../../reusable-ui/Header.jsx";
import Total from "./Total.jsx";
import { formatPrice } from "../../../../../utils/helpers.js";

const Basket = () => {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <div className="body">Body</div>
      <Header>Footer</Header>
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;

  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;

export default Basket;
