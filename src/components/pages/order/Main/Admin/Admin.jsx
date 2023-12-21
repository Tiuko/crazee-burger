import styled from "styled-components";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";
import AdminTabs from "./AdminTabs.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";

const Admin = () => {
  const { isCollapsed } = useContext(OrderContext);
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
};

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;
  left: 0;
`;

export default Admin;
