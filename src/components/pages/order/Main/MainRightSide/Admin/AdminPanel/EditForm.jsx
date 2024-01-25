import {useContext, useState} from 'react';
import OrderContext from "../../../../../../../context/OrderContext.jsx";
import Form from "./Form.jsx";
import EditInfoMessage from "./EditInfoMessage.jsx";
import SavingMessage from './SavingMessage.jsx';
import {useSuccessMessage} from '../../../../../../../hooks/useSuccessMessage.js';

const EditForm = () => {
  const { username, productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const [valueOnFocus, setvalueOnFocus] = useState()
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = { ...productSelected, [name]: value };
    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated, username);
  };

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value
    setvalueOnFocus(valueOnFocus)
  }

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value
    if (valueOnFocus !== valueOnBlur) {
      console.log("Modifications enregistrées")
      displaySuccessMessage()
    }
  }

  return (
      <Form
          product={productSelected}
          onChange={handleChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          ref={titleEditRef}
      >
        {isSaved ? <SavingMessage /> : <EditInfoMessage />}
      </Form>
  );
};

export default EditForm;
