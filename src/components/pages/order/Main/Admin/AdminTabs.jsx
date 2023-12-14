import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab.jsx";
import {FiChevronDown} from 'react-icons/fi';

const AdminTabs = () => {
  return (
    <AdminTabsStyled>
      <Tab Icon={<FiChevronDown />}/>
    </AdminTabsStyled>
  );
};

const AdminTabsStyled = styled.div`
`;

export default AdminTabs;
