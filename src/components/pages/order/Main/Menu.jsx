import styled from "styled-components";
import { useState } from "react";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu.js";

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
  background: purple;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 3.75rem;
  padding: 3.125rem 3.125rem 9.375rem;
  justify-items: center;
  
  .produit {
    background: red;
    width: 15rem;
    height: 20.625rem;
  }
`;

export default Menu;
