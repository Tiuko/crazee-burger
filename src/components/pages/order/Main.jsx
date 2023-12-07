import styled from "styled-components";
import { theme } from "../../../theme/index.js";

const Main = () => {
  return <MainStyled className="main"></MainStyled>;
};

const MainStyled = styled.div`
  background: ${theme.colors.white};
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  flex: 1;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;

export default Main;
