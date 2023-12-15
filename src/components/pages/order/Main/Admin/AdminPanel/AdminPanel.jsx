import styled from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { useContext } from "react";
import getTabsConfig, {getTabSelected} from '../getTabsConfig.jsx';

const AdminPanel = () => {
  const { currentTabSelected } =
    useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled className="panel-admin">
      {tabSelected && tabSelected.Content}
    </AdminPanelStyled>
  );
};

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
`;

export default AdminPanel;