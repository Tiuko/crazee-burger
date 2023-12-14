import styled from "styled-components";
import AdminPanel from "./AdminPanel.jsx";
import AdminTabs from "./AdminTabs.jsx";
import { useState } from "react";

const Admin = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
};

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

export default Admin;
