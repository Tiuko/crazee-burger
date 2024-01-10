import styled from "styled-components";
import { useContext } from "react";
import { theme } from "../../../../../theme/index.js";
import Card from "../../../../reusable-ui/Card.jsx";
import { formatPrice } from "../../../../../utils/helpers.js";
import OrderContext from "../../../../../context/OrderContext.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const Menu = () => {
  const { menu, isModeAdmin, handleDelete, resetMenu, setProductSelected } =
    useContext(OrderContext);

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  const handleClick = (idProductClicked) => {
    const productClickedOn = menu.find(
      (product) => product.id === idProductClicked,
    );
    setProductSelected(productClickedOn);
  };

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
            onClick={() => handleClick(id)}
          />
        );
      })}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
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
