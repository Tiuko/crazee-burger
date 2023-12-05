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
        <div className="navbar">
          Navbar
          <h1>Bonjour {username}</h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <div className="main">Main</div>
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

    .navbar {
      background-color: blue;
      height: 10vh;
    }

    .main {
      background-color: green;
        flex: 1;
    }
  }
`;

export default OrderPage;
