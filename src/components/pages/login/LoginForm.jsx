import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput.jsx";
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx";

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
      <div>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrer votre prénom.."}
          required
          Icon={<BsPersonCircle className="input-icon" />}
        />
        <PrimaryButton
          label={"Accéder à votre espace"}
          Icon={<IoChevronForward className="button-icon" />}
        />
      </div>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1px solid ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    margin: 20px 10px 10px;
  }

  .input-icon {
    font-size: ${theme.fonts.size.SM};
    margin-right: ${theme.gridUnit}px;
    color: ${theme.colors.greySemiDark};
  }

  .button-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;
  }
`;

export default LoginForm;
