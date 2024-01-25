import styled from "styled-components";
import BasketHeader from "./BasketHeader/BasketHeader.jsx";
import BasketFooter from "./BasketFooter.jsx";
import { theme } from "../../../../../theme/index.js";
import BasketBody from "./BasketBody/BasketBody.jsx";

const Basket = () => {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;

export default Basket;
