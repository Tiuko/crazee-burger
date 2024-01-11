import { theme } from "../../../theme/index.js";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar.jsx";
import Main from "./Main/Main.jsx";
import { useState, useRef } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
import { fakeMenu } from "../../../fakeData/fakeMenu.js";
import { EMPTY_PRODUCT } from "../../enums/product.js";
import { deepClone } from "../../../utils/array.js";

const OrderPage = () => {
  // State
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT );
  const titleEditRef = useRef();

  // Behaviors
  const handleAdd = (newProduct) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete,
    );
    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    const menuCopy = deepClone(menu);
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id,
    );
    console.log("indexOfProductToEdit", indexOfProductToEdit);
    menuCopy[indexOfProductToEdit] = productBeingEdited;
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    handleEdit,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    titleEditRef,
  };

  // Render
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <NavBar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
};

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 90vw; // width: 1400px normally;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

export default OrderPage;
