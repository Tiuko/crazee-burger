import styled from "styled-components";
import { useContext } from "react";
import { theme } from "../../../../../theme/index.js";
import Card from "../../../../reusable-ui/Card.jsx";
import {
  checkIfProductIsClicked,
  formatPrice,
} from "../../../../../utils/maths.js";
import OrderContext from "../../../../../context/OrderContext.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../enums/product.js";
import { isEmpty } from "../../../../../utils/array.js";

const Menu = () => {
  const {
    username,
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  const handleCardDelete = async (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete);
    if (idProductToDelete === productSelected.id) {
      await setProductSelected(EMPTY_PRODUCT);
    }
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd);
  };

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={isModeAdmin ? () => handleProductSelected(id) : null}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
            onAdd={(event) => handleAddButton(event, id)}
          />
        );
      })}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 3.75rem;
  padding: 3.125rem 3.125rem 9.375rem;
  justify-items: center;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;

export default Menu;
