import { theme } from "../../../theme/index.js";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar.jsx";
import Main from "./Main/Main.jsx";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.jsx";
import {fakeMenu} from '../../../fakeData/fakeMenu.js';
import {EMPTY_PRODUCT} from '../../../utils/helpers.js';


const OrderPage = () => {
  // State
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  // Behaviors
  const handleAdd = (newProduct) => {
    const menuCopy = [...menu];
    const menuUpdated = [newProduct,...menuCopy];
    setMenu(menuUpdated);
  }

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = [...menu];
    const menuUpdated = menuCopy.filter(
        (product) => product.id !== idOfProductToDelete,
    );
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  }

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
    resetMenu,
    newProduct,
    setNewProduct,
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
