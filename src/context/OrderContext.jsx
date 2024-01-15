import {createContext, createRef} from 'react';

const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddSelected: false,
  setIsAddSelected: () => {},

  isEditSelected: false,
  setIsEditSelected: () => {},

  currentTabSelected: "add",
  setCurrentTabSelected: () => {},

  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  resetMenu: () => {},
  handleEdit: () => {},

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},

  titleEditRef: createRef(),

  basket: [],
  handleAddToBasket: () => {},
  handleDeleteBasketProduct: () => {},
});

export default OrderContext;
