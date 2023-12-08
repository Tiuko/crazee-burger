import styled from "styled-components";
import { theme } from "../../../../theme/index.js";

const Main = () => {
  return <MainStyled className="main">
    <div className="basket">Basket</div>
    <div className="menu">Menu</div>
  </MainStyled>;

};

const MainStyled = styled.div`
  background: ${theme.colors.white};
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  flex: 1;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  
  display: grid;
  grid-template-columns: 25% 1fr;
  
  .menu {
    background: purple;
  }
  
  .basket {
    background: pink;
  }
  
`;

export default Main;
