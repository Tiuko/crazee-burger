import styled from "styled-components";
import HintMessage from './HintMessage.jsx';
import {useContext} from 'react';
import OrderContext from '../../../../../../context/OrderContext.jsx';

const EditForm = () => {
    const {productSelected, setProductSelected} = useContext(OrderContext);
 return (
  <EditFormStyled>
      <HintMessage />
      <span>{productSelected && productSelected.title}</span>
  </EditFormStyled>
 );
};

const EditFormStyled = styled.div`

`;

export default EditForm;