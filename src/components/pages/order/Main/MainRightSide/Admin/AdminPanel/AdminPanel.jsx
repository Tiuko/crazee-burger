import styled from "styled-components";
import { theme } from "../../../../../../../theme/index.js";
import OrderContext from "../../../../../../../context/OrderContext.jsx";
import { useContext } from "react";
import getTabsConfig, { getTabSelected } from "../getTabsConfig.jsx";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.js";

const AdminPanel = () => {
  const { currentTabSelected, productSelected } = useContext(OrderContext);
  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled className="panel-admin">
      {tabSelected && tabSelected.Content}
    </AdminPanelStyled>
  );
};

const AdminPanelStyled = styled.div`
  height: 240px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box;
  padding: 30px 5%;
`;

export default AdminPanel;
