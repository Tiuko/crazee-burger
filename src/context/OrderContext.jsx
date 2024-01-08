import { createContext } from "react";

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

  newProduct: () => {},
  setNewProduct: () => {},

  productSelected: () => {},
  setProductSelected: () => {},
});

export default OrderContext;
