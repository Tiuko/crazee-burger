import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { useContext } from "react";

const AdminPanel = () => {
  const { isAddSelected, isEditSelected} = useContext(OrderContext);

  return (
    <AdminPanelStyled className="panel-admin">
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  );
};

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;

export default AdminPanel;