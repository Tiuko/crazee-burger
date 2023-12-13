import styled from "styled-components";
import { theme } from "../../../../theme/index.js";
import Menu from "./Menu.jsx";

const Main = () => {
  return (
    <MainStyled className="main">
      {/*<div className="basket">Basket</div>*/}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  border: 3px solid green;
  background: ${theme.colors.white};
  height: calc(95vh - 10vh);
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  flex: 1;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  display: grid;
  grid-template-columns: 1fr;
  //grid-template-columns: 25% 1fr;

  .basket {
    background: pink;
  }

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    .admin {
      background: red;
      height: 250px;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
`;

export default Main;
