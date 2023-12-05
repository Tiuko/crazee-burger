import { useParams } from "react-router-dom";
import { theme } from "../../../theme/index.js";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";
import Main from "./Main.jsx";

const OrderPage = () => {
  // State
  const { username } = useParams();

  // Render
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
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
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;

export default OrderPage;
