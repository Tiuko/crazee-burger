import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../../theme/index.js";

const SubmitMessage = () => {
  return (
    <SubmitMessageStyled>
      <div className="submit-message">
        <FiCheck className="icon" />
        <span className="message">Ajouté avec succès !</span>
      </div>
    </SubmitMessageStyled>
  );
};

const SubmitMessageStyled = styled.div`
  .submit-message {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;

    .icon {
      color: ${theme.colors.success};
      margin-left: 10px;
      width: 1em;
      height: 1em;
      border: 1px solid ${theme.colors.success};
      border-radius: 50%;
      vertical-align: middle;
    }

    .message {
      margin-left: 5px;
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.success};
    }
  }
`;

export default SubmitMessage;
