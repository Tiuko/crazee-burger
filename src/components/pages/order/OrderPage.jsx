import { Link, useParams } from "react-router-dom";
import { theme } from "../../../theme/index.js";
import styled from "styled-components";

const OrderPage = () => {
  // State
  const { username } = useParams();

  // Render
  return (
    <OrderPageStyled>
      <div className="container">
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </OrderPageStyled>
  );
};

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .container {
	background-color: red;
	height: 95vh;
	width: 1400px;

  }
`;

export default OrderPage;
