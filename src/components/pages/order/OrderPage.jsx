import { theme } from "../../../theme/index.js";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar.jsx";
import Main from "./Main/Main.jsx";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";

const OrderPage = () => {
  // State
  const [isModeAdmin, setIsModeAdmin] = useState(true);

  // Behaviors
    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin
    }

  // Render
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <NavBar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
};

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 90vw; // width: 1400px normally;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

export default OrderPage;
