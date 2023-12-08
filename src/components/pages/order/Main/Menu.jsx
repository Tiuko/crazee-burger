import styled from "styled-components";
import { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu.js";
import {theme} from '../../../../theme/index.js';

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((produit) => {
        return <div className="produit">{produit.title}</div>;
      })}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 3.75rem;
  padding: 3.125rem 3.125rem 9.375rem;
  justify-items: center;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  
  .produit {
    background: red;
    width: 15rem;
    height: 20.625rem;
  }
`;

export default Menu;
