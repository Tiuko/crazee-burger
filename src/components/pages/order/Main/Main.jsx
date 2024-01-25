import styled from "styled-components";
import { theme } from "../../../../theme/index.js";
import Basket from "./Basket/Basket.jsx";
import MainRightSide from "./MainRightSide/MainRightSide.jsx";

const Main = () => {
  return (
    <MainStyled className="main">
      <Basket />
      <MainRightSide />
    </MainStyled>
  );
};

const MainStyled = styled.div`
  background: ${theme.colors.white};
  height: calc(95vh - 10vh);
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  flex: 1;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  display: grid;
  grid-template-columns: 25% 1fr;
  //grid-template-columns: 25% 1fr;

`;

export default Main;
