import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import {BsPersonCircle} from 'react-icons/bs';

const LoginForm = () => {
  // State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // Behaviors
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div className="input-container">
          <BsPersonCircle className="input-icon" />
          <input
              value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder="Entrer votre prénom.."
              required
          />
      </div>
      <button>Accéder à votre espace</button>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 48px;
  }

  h2 {
    color: ${theme.colors.white};
    font-size: 36px;
    margin: 20px 10px 10px;
  }
    
    .input-container {
        background-color: ${theme.colors.white};
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;
        
        .input-icon {
            font-size: 15px;
            margin-right: 8px;
            color: ${theme.colors.greySemiDark};
        }
        
        input {
            border: none;
            font-size: 15px;
            color: ${theme.colors.dark};
        }
        
        &::placeholder {
            background: ${theme.colors.white};
            color: ${theme.colors.greyLight};
        }
    }
`;

export default LoginForm;
