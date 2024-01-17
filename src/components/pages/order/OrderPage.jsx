import { useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import Main from "./Main/Main.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import OrderContext from "../../../context/OrderContext.jsx";
import { EMPTY_PRODUCT } from "../../enums/product.js";
import {useMenu} from '../../../hooks/useMenu.js';
import {useBasket} from '../../../hooks/useBasket.js';
import {findObjectById} from '../../../utils/array.js';
import {useParams} from 'react-router-dom';

const OrderPage = () => {
  // State
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT );
  const titleEditRef = useRef();
  const { menu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu()
  const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket()
  const { username } = useParams()

  const handleProductSelected = async (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menu)
    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
  }

  const orderContextValue = {
    username,
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
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
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
    overflow: hidden;
  }
`;

export default OrderPage;
