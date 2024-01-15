import styled from "styled-components";
import { useContext, useEffect } from "react";
import { theme } from "../../../../../theme/index.js";
import Card from "../../../../reusable-ui/Card.jsx";
import {
  checkIfProductIsClicked,
  formatPrice,
} from "../../../../../utils/helpers.js";
import OrderContext from "../../../../../context/OrderContext.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../enums/product.js";
import { find } from "../../../../../utils/array.js";

const Menu = () => {
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    productSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
    handleAddToBasket,
    handleDeleteBasketProduct,
  } = useContext(OrderContext);

  useEffect(() => {
    if (productSelected !== EMPTY_PRODUCT && titleEditRef.current) {
      titleEditRef.current.focus();
    }
  }, [productSelected, titleEditRef]);

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return

    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    //const productClickedOn = menu.find((product) => product.id === idProductClicked)
    const productClickedOn = find(idProductClicked, menu)
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
  }

  const handleCardDelete = async (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    handleDeleteBasketProduct(idProductToDelete)
    if (idProductToDelete === productSelected.id) {
      await setProductSelected(EMPTY_PRODUCT);
    }
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    //const productToAdd = menu.find((menuProduct) => menuProduct.id === idProductToAdd)
    const productToAdd = find(idProductToAdd, menu);
    handleAddToBasket(productToAdd);
  };

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
            onClick={() => handleClick(id)}
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
