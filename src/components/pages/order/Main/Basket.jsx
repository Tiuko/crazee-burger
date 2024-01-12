import styled from "styled-components";
import { theme } from "../../../../theme/index.js";

const Basket = () => {
  return (
    <BasketStyled>
      <div className="head">Head</div>
      <div className="body">Body</div>
      <div className="footer">Footer</div>
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;

  .head {
    height: 70px;
    background: ${theme.colors.background_dark};
  }

  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }

  .footer {
    height: 70px;
    background: ${theme.colors.background_dark};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
  }
`;

export default Basket;
