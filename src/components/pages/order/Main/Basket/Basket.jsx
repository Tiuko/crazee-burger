import styled from "styled-components";
import Total from "./Total.jsx";
import { formatPrice } from "../../../../../utils/helpers.js";
import Footer from "./Footer.jsx";
import BasketBody from './BasketBody.jsx';

const Basket = () => {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Basket;
