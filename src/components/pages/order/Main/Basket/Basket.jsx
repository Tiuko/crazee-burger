import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";
import Header from '../../../../reusable-ui/Header.jsx';

const Basket = () => {
  return (
    <BasketStyled>
      <Header>Head</Header>
      <div className="body">Body</div>
      <Header>Footer</Header>
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};

  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;

export default Basket;
