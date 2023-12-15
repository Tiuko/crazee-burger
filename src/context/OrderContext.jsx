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
  setMenu: () => {},
  handleAdd: () => {},
});

export default OrderContext;
