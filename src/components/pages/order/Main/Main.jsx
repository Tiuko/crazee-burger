import styled from "styled-components";
import { theme } from "../../../../theme/index.js";
import Menu from "./Menu/Menu.jsx";
import Admin from "./Admin/Admin.jsx";
import OrderContext from "../../../../context/OrderContext.jsx";
import { useContext } from "react";
import Basket from './Basket/Basket.jsx';

const Main = () => {
  const { isModeAdmin} = useContext(OrderContext);
  return (
    <MainStyled className="main">
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
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

  .basket {
    background: pink;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    // border-bottom-left-radius: ${theme.borderRadius.extraRound};
  }
`;

export default Main;
