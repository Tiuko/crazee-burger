import styled from "styled-components";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js";
import { theme } from "../../../../theme/index.js";
import Card from "../../../reusable-ui/Card.jsx";
import {formatPrice} from '../../../../utils/helpers.js';

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  border: 1px solid blue;
  background: ${theme.colors.white};
  display: grid;
  //grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 3.75rem;
  padding: 3.125rem 3.125rem 9.375rem;
  justify-items: center;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;

export default Menu;
