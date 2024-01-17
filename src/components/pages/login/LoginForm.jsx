import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput.jsx";
import Button from "../../reusable-ui/Button.jsx";
import { authenticateUser } from "../../../api/user.js";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        authenticateUser(username)
        setUsername("")
        navigate(`order/${username}`)
    }

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrer votre prénom.."}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />
        <Button label={"Accéder à votre espace"} Icon={<IoChevronForward />} />
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

  .input-login {
    margin: 18px 0;
  }
`;

export default LoginForm;
