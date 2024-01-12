import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";
import Total from "./Total.jsx";
import { formatPrice } from "../../../../../utils/helpers.js";
import Footer from "./Footer.jsx";

const Basket = () => {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <div className="body">Body</div>
      <Footer />
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
